

import apiInstant from '../apis'
import store from '../store'
import { put, takeLatest, all } from 'redux-saga/effects'
import actionType from '../constants/actionTypes'

function* login() {
  let dataLogin = store.getState().login
  try {
    const dataResponse = yield apiInstant.login(dataLogin)
    .then(response => response )
    yield put({ type: actionType.UPDATE_USER_DATA.PENDING, payload: dataResponse });
  } catch(error) {
    yield put({ type: actionType.LOGIN.FAILED, payload: { error: error } })
  } 
}

function* register() {
  let dataRegister = store.getState().register
  try {
    const dataResponse = yield apiInstant.register(dataRegister)
    .then(response => response )
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