import actionType from './../constants/actionTypes'

export const updateRegisterData = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionType.UPDATE_REGISTER_DATA.PENDING,
      payload: data
    })
  }
}