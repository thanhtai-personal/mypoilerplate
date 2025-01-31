import actionType from 'root/actionTypes'

export const updateTimeLineData = (data) => {
  return {
    type: actionType.UPDATE_TIMELINE_DATA.SUCCESS,
    data
  }
}

export const getTimeLineData = (data) => {
  return {
    type: actionType.GET_TIMELINE_DATA.PENDING,
    data
  }
}