
import { put, takeLatest, all } from 'redux-saga/effects'
import actionType from 'root/actionTypes'

function* getGeographyData (data) {
  try {
    const geography = yield import('root/data/vietMap/VietNam.json').then(res => (res))
    yield put({ type: actionType.GET_GEOGRAPHY_DATA.SUCCESS, data: geography });
  } catch (error) {
    yield put({ type: actionType.GET_GEOGRAPHY_DATA.FAILED, payload: { error: error } })
  }
}


function* registerActionWatcher () {
  yield all([
    yield takeLatest(actionType.GET_GEOGRAPHY_DATA.PENDING, getGeographyData)
  ])
}

export default registerActionWatcher