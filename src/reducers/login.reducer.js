import initialState from './initialsState'
// import { createAsyncTypes } from './../constants/utilities'
import {
  UPDATE_USER_NAME,
  UPDATE_PASSWORD
} from './../constants/actionTypes'

export default (state = initialState.login, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        userName: action.payload
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
}