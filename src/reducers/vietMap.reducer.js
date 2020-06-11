import actionType from 'root/actionTypes'
const initialState = {
  geographyPath: 'root/data/vietMap/VietNam.json',
  loadingGeography: true,
  geography: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_GEOGRAPHY_DATA.PENDING:
      return {
        ...state,
        loadingGeography: true
      }
    case actionType.GET_GEOGRAPHY_DATA.SUCCESS:
      return {
        ...state,
        geography: action.data,
        loadingGeography: false
      }
    case actionType.GET_GEOGRAPHY_DATA.FAILED:
      return {
        ...state,
        loadingGeography: false
      }
    case actionType.UPDATE_GEOGRAPHY_PATH.SUCCESS:
      return {
        ...state,
        geographyPath: action.data
      }
    default:
      return state
  }
}