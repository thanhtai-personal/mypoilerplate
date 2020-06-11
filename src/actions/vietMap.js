import actionType from 'root/actionTypes'

export const getGeographyData = (data) => {
  return {
    type: actionType.GET_GEOGRAPHY_DATA.PENDING,
    data
  }
}

export const updateGeographyPath = (data) => {
  return {
    type: actionType.UPDATE_GEOGRAPHY_PATH.SUCCESS,
    data
  }
}