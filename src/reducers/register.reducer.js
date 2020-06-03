import initialState from './initialsState'
import actionType from './../constants/actionTypes'

export default (state = initialState.register, action) => {
  switch (action.type) {
    case actionType.UPDATE_REGISTER_DATA.SUCCESS:
    case actionType.UPDATE_REGISTER_DATA.FAILED:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}