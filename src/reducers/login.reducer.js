import actionType from '../actionTypes'

const initialState = {
  userName: '',
  password: ''
}

export default (state = initialState, action) => {
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