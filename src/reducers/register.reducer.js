import actionType from '../actionTypes'

const initialState = {
  userName: '',
  password: '',
  firstName: '',
  lastName: ''
}

export default (state = initialState, action) => {
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