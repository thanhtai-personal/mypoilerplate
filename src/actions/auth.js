import actionType from './../constants/actionTypes'

export const login = () => {
  return ({
    type: actionType.LOGIN.PENDING
  })
}