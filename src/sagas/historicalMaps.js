
import { put, all, debounce, call } from 'redux-saga/effects'
import actionType from 'root/actionTypes'


function* getTimeLineData (data) {
  try {
    let vietHistoryData = yield call(() => import('root/data/historicalMaps/vietnam'))
    vietHistoryData = vietHistoryData?.default || {}
    let timeLineData = {}
    Object.keys(vietHistoryData).forEach((key1) => {
      let _maps = vietHistoryData[key1].maps || {}
      Object.keys(_maps).forEach((key2) => {
        if (_maps[key2].minTime <= data.time && _maps[key2].maxTime >= data.time) {
          if (!timeLineData[key1]) {
            timeLineData[key1] = {}
          }
          if (!timeLineData[key1].maps) {
            timeLineData[key1].maps = {}
          }
          timeLineData[key1].maps[key2] = _maps[key2]
        }
      })
    })
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