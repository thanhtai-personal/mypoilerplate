import actionType from './../constants/actionTypes'

export const updateLoginData = (data) => {
  let payload = {
    [data.path]: data.value
  }
  return {
    type: actionType.UPDATE_LOGIN_DATA.PENDING,
    payload
  }
}