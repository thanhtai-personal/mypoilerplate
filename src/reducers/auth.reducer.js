import initialState from './initialsState'
import actionType from './../constants/actionTypes'

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case actionType.UPDATE_USER_DATA.SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionType.UPDATE_USER_DATA.FAILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}