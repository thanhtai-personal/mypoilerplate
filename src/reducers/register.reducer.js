import initialState from './initialsState'
import actionType from './../constants/actionTypes'

export default (state = initialState.login, action) => {
  switch (action.type) {
    case actionType.UPDATE_REGISTER_DATA.SUCCESS:
      return {
        ...state,
        userName: action.payload
      }
    case actionType.UPDATE_REGISTER_DATA.FAILED:
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
}