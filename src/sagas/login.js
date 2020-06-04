
import { put, takeLatest, all } from 'redux-saga/effects'
import actionType from '../actionTypes'

function* updateLoginData(data) {
  try {
    yield put({ type: actionType.UPDATE_LOGIN_DATA.SUCCESS, data: data.payload });
  } catch(error) {
    yield put({ type: actionType.UPDATE_LOGIN_DATA.FAILED, payload: { error: error } })
  } 
}


function* loginActionWatcher() {
  yield all([
    yield takeLatest(actionType.UPDATE_LOGIN_DATA.PENDING, updateLoginData)
  ])
}

export default loginActionWatcher