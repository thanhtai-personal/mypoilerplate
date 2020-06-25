import actionType from 'root/actionTypes'
import tranquoctuan from 'root/data/historicalMaps/vietnam/heros/tranquoctuan'
const initialState = {
  loadingMap: true,
  eventTimes: [
    {
      value: -300,
      label: '~III TCN',
    },
    {
      value: -208,
      label: '208TCN',
    },
    {
      value: -179,
      label: '179-111 TCN',
    },
    {
      value: -111,
      label: '111 TCN-34',
    },
    {
      value: -40,
      label: '40TCN-34SCN',
    },
    {
      value: 554,
      label: '554-602',
    },
    {
      value: 905,
      label: '',
    },
    {
      value: 930,
      label: '',
    },
    {
      value: 931,
      label: '',
    },
    {
      value: 937,
      label: '',
    },
    {
      value: 938,
      label: '',
    },
    {
      value: 944,
      label: '',
    },
    {
      value: 966,
      label: '',
    },
    {
      value: 968,
      label: '',
    },
    {
      value: 980,
      label: '',
    },
    {
      value: 1010,
      label: '',
    },
    {
      value: 1014,
      label: '',
    },
    {
      value: 1048,
      label: '',
    },
    {
      value: 1069,
      label: '',
    },
    {
      value: 1159,
      label: '',
    },
    {
      value: 1225,
      label: '',
    },
    {
      value: 1306,
      label: '',
    },
    {
      value: 1400,
      label: '',
    },
    {
      value: 1402,
      label: '',
    },
    {
      value: 1407,
      label: '',
    },
    {
      value: 1418,
      label: '',
    },
    {
      value: 1425,
      label: '',
    },
    {
      value: 1428,
      label: '',
    },
    {
      value: 1471,
      label: '',
    },
    {
      value: 1479,
      label: '',
    },
    {
      value: 1539,
      label: '',
    },
    {
      value: 1540,
      label: '',
    },
    {
      value: 1554,
      label: '',
    },
    {
      value: 1569,
      label: '',
    },
    {
      value: 1611,
      label: '',
    },
    {
      value: 1653,
      label: '',
    },
    {
      value: 1658,
      label: '',
    },
    {
      value: 1679,
      label: '',
    },
    {
      value: 1693,
      label: '',
    },
    {
      value: 1708,
      label: '',
    },
    {
      value: 1732,
      label: '',
    },
    {
      value: 1736,
      label: '1736-1739',
    },
    {
      value: 1755,
      label: '',
    },
    {
      value: 1757,
      label: '',
    },
    {
      value: 1771,
      label: '',
    },
    {
      value: 1773,
      label: '',
    },
    {
      value: 1774,
      label: '',
    },
    {
      value: 1777,
      label: '',
    },
    {
      value: 1788,
      label: '',
    },
    {
      value: 1802,
      label: '',
    },
    {
      value: 1832,
      label: '',
    },
    {
      value: 1835,
      label: '',
    },
    {
      value: 1841,
      label: '',
    },
    {
      value: 1859,
      label: '',
    },
    {
      value: 1862,
      label: '',
    },
    {
      value: 1870,
      label: '',
    },
    {
      value: 1883,
      label: '',
    },
    {
      value: 1887,
      label: '',
    },
    {
      value: 1893,
      label: '',
    },
    {
      value: 1895,
      label: '',
    },
    {
      value: 1905,
      label: '',
    },
    {
      value: 1945,
      label: '',
    },
    {
      value: 1954,
      label: '',
    },
    {
      value: 1976,
      label: '',
    },
  ],
  minTime: -300,
  maxTime: 50,
  currentTime: -300,
  fetching: false,
  fetchingData: false,
  timeLineData: {},
  celebrityData: tranquoctuan,
  celebrityId: 'tranquoctuan'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_MAP.PENDING:
      return {
        ...state,
        loadingMap: true
      }
    case actionType.LOAD_MAP.SUCCESS:
    case actionType.LOAD_MAP.FAILED:
      return {
        ...state,
        loadingMap: false
      }
    case actionType.UPDATE_TIMELINE_DATA.SUCCESS:
      return {
        ...state,
        ...action.data
      }
    case actionType.GET_TIMELINE_DATA.SUCCESS:
      return {
        ...state,
        timeLineData: action.timeLineData,
        fetchingData: false
      }
    case actionType.GET_TIMELINE_DATA.FAILED:
      return {
        ...state,
        ...action.data,
        fetchingData: false
      }
    default:
      return state
  }
}