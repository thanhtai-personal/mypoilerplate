import actionType from 'root/actionTypes'
const initialState = {
  loadingMap: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_MAP.PENDING:
      return {
        ...state,
        loadingMap: true
      }
    case actionType.LOAD_MAP.SUCCESS:
      return {
        ...state,
        loadingMap: false
      }
    case actionType.LOAD_MAP.FAILED:
      return {
        ...state,
        loadingMap: false
      }
    default:
      return state
  }
}