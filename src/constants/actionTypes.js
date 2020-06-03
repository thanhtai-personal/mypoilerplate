import { createAsyncTypes } from './utilities'
const actionType = {
  //login
  UPDATE_LOGIN_DATA: 'UPDATE_LOGIN_DATA',

  //register
  UPDATE_REGISTER_DATA: 'UPDATE_REGISTER_DATA',

  //auth
  UPDATE_USER_DATA: 'UPDATE_USER_DATA',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER'
}

Object.keys(actionType).forEach((key) => {
  actionType[key] = createAsyncTypes(actionType[key])
})

export default actionType