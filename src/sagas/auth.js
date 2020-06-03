import apiService from '../apis'
import { put, takeLatest, all, call } from 'redux-saga/effects'
import actionType from '../constants/actionTypes'

function* login(dataLogin) {
  try {
    const dataResponse = yield apiService.auth?.login(dataLogin).then(response => response)
    window.localStorage.setItem('jwtToken', dataResponse)
    yield put({ type: actionType.UPDATE_USER_DATA.PENDING, payload: dataResponse });
  } catch(error) {
    yield put({ type: actionType.LOGIN.FAILED, payload: { error: error } })
  } 
}

function* register(dataRegister) {
  try {
    const dataResponse = yield call(() => apiService.register(dataRegister))
    yield put({ type: actionType.UPDATE_USER_DATA.PENDING, payload: dataResponse });
  } catch(error) {
    yield put({ type: actionType.REGISTER.FAILED, payload: { error: error } })
  }
}

function* updateUserData(data) {
  try {
    yield put({ type: actionType.UPDATE_USER_DATA.SUCCESS, payload: data });
  } catch(error) {
    yield put({ type: actionType.UPDATE_USER_DATA.FAILED, payload: { error: error } })
  }
}


function* authActionWatcher() {
  yield all([
    yield takeLatest(actionType.LOGIN.PENDING, login),
    yield takeLatest(actionType.REGISTER.PENDING, register),
    yield takeLatest(actionType.UPDATE_USER_DATA.PENDING, updateUserData)
  ])
}

export default authActionWatcher