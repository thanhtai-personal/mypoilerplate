
import { put, all, debounce, call } from 'redux-saga/effects'
import actionType from 'root/actionTypes'

function* getTimeLineData (data) {
  try {
    let vietHistoryData = yield call(() => import('root/data/historicalMaps/vietnam'))
    vietHistoryData = vietHistoryData?.default
    yield put({ type: actionType.GET_TIMELINE_DATA.SUCCESS, timeLineData: vietHistoryData })
  } catch (error) {
    yield put({ type: actionType.GET_TIMELINE_DATA.FAILED, payload: { error: error } })
  }
}


function* historicalMapsActionWatcher () {
  yield all([
    yield debounce(1000, actionType.GET_TIMELINE_DATA.PENDING, getTimeLineData)
  ])
}

export default historicalMapsActionWatcher