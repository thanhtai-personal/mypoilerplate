
import { put, takeLatest, all } from 'redux-saga/effects'
import actionType from '../actionTypes'

function* updateRegisterData(data) {
  try {
    yield put({ type: actionType.UPDATE_REGISTER_DATA.SUCCESS, data: data.payload });
  } catch(error) {
    yield put({ type: actionType.UPDATE_REGISTER_DATA.FAILED, payload: { error: error } })
  } 
}


function* registerActionWatcher() {
  yield all([
    yield takeLatest(actionType.UPDATE_REGISTER_DATA.PENDING, updateRegisterData)
  ])
}

export default registerActionWatcher