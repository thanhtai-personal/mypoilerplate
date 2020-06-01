import initialState from './initialsState'
import actionType from './../constants/actionTypes'

export default (state = initialState.login, action) => {
  switch (action.type) {
    case actionType.UPDATE_LOGIN_DATA.SUCCESS:
    case actionType.UPDATE_LOGIN_DATA.FAILED:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}