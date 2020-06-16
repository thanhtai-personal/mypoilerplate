
import { put, all, debounce, call } from 'redux-saga/effects'
import actionType from 'root/actionTypes'
import { getTimeLineDataByYear } from 'root/constants/utilities'

function* getTimeLineData (data) {
  try {
    let vietHistoryData = yield call(() => import('root/data/historicalMaps/vietnam'))
    vietHistoryData = vietHistoryData?.default
    let timeLineData =  getTimeLineDataByYear(vietHistoryData, data?.time || 0)
    yield put({ type: actionType.GET_TIMELINE_DATA.SUCCESS, timeLineData })
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