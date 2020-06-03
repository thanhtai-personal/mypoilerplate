import actionType from './../constants/actionTypes'

export const login = (data) => {
  return ({
    type: actionType.LOGIN.PENDING,
    data
  })
}