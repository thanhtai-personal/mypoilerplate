import { createAsyncTypes } from 'root/constants/utilities'
import authenActionTypes from './auth'
import vietMap from './vietMap'
const actionType = {
  ...authenActionTypes,
  ...vietMap
}

Object.keys(actionType).forEach((key) => {
  actionType[key] = createAsyncTypes(actionType[key])
})

export default actionType