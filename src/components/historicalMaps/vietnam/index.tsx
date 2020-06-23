import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import TimeSlider from 'root/components/commons/timeSlider'
import {
  MarginMenuTopStyled, FixedBottomStyled, CenterWidthStyled, OpacityStyled, CenterStyled
  , MarginForFixedBottomFrameStyled, AppearAnimationDiv
} from 'root/constants/commonStyled'
import { makeStyles } from '@material-ui/core/styles'
import {
  updateTimeLineData
} from 'root/actions/historicalMaps'
import LoadingComponent from 'root/components/commons/loadingComponent'
import FullVietMapData from 'root/data/historicalMaps/vietnam'
import { getTimeLineData } from 'root/constants/utilities'
 
const TimeLineViewer = React.lazy(() => import('../timeLineViewer'))

interface VietMapProps {
  text: any,
  eventTimes: any
  minTime: number,
  maxTime: number,
  currentTime: number,
  updateTimeLineData: any,
  fetching: Boolean,
  fetchingData: Boolean,
  timeLineData: any
}

interface VietMapState { }

const useStyles = makeStyles({
  timelineStyle: {
    width: '95vw',
  },
})

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {

  const { text, eventTimes, minTime, maxTime, currentTime, fetching, fetchingData
    , updateTimeLineData } = props
  const mapStyle = useStyles()

  const [timeLineData, setTimeLineData] = useState(getTimeLineData(-300, FullVietMapData))

  const onChangeSlider = (event: any, value: number) => {
    if (value > (maxTime - 10) && maxTime < 2020) {
      updateTimeLineData({ fetching: true })
      updateTimeLineData({
        minTime: maxTime - 15,
        maxTime: (maxTime + 200) > 2020 ? 2020 : (maxTime + 200),
        fetching: false,
      })
    }
    if (value < (minTime + 10) && minTime > -300) {
      updateTimeLineData({ fetching: true })
      updateTimeLineData({
        minTime: (minTime - 200) < -300 ? 300 : (minTime - 200),
        maxTime: minTime + 15,
        fetching: false,
      })
    }
    updateTimeLineData({ currentTime: value })
    return value
  }

  useEffect(() => {
    setTimeLineData(getTimeLineData(currentTime, FullVietMapData))
  }, [currentTime])

  return (
    <MarginMenuTopStyled>
      {fetchingData ? <CenterStyled><LoadingComponent /></CenterStyled>
        : <MarginForFixedBottomFrameStyled>
          <AppearAnimationDiv><TimeLineViewer mapData={timeLineData} /></AppearAnimationDiv>
        </MarginForFixedBottomFrameStyled>
      }
      <FixedBottomStyled><OpacityStyled>
        {fetching ? <CenterWidthStyled><LoadingComponent /></CenterWidthStyled>
          : <TimeSlider
            timelineStyle={mapStyle.timelineStyle} text={text}
            customMark={eventTimes}
            minTime={minTime}
            maxTime={maxTime}
            onChangeSlider={onChangeSlider || (() => { })}
            defaultTimeValue={-300}
          />}
      </OpacityStyled></FixedBottomStyled>
    </MarginMenuTopStyled>
  )
}

interface RootState {
  historicalMaps: any
}

const mapState = (state: RootState) => ({
  eventTimes: state.historicalMaps?.eventTimes,
  minTime: state.historicalMaps?.minTime,
  maxTime: state.historicalMaps?.maxTime,
  currentTime: state.historicalMaps?.currentTime,
  fetching: state.historicalMaps?.fetching,
  fetchingData: state.historicalMaps?.fetchingData,
  timeLineData: state.historicalMaps?.timeLineData
})

const mapDispatch = {
  updateTimeLineData
}

export default connect(mapState, mapDispatch)(VietMapComponent)