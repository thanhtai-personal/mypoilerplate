import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TimeSlider from 'root/components/commons/timeSlider'
import { MarginMenuTopStyled, FixedBottomStyled, CenterWidthStyled, OpacityStyled, CenterStyled
  , MarginForFixedBottomFrameStyled
} from 'root/constants/commonStyled'
import { makeStyles } from '@material-ui/core/styles'
import {
  updateTimeLineData, getTimeLineData
} from 'root/actions/historicalMaps'
import LoadingComponent from 'root/components/commons/loadingComponent'

interface VietMapProps {
  text: any,
  eventTimes: any
  minTime: number,
  maxTime: number,
  currentTime: number,
  updateTimeLineData: any,
  fetching: Boolean,
  fetchingData: Boolean,
  getTimeLineData: any
}

interface VietMapState { }

const useStyles = makeStyles({
  timelineStyle: {
    width: '95vw',
  },
})

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {

  const { text, eventTimes, minTime, maxTime, currentTime, fetching, fetchingData
    , updateTimeLineData, getTimeLineData } = props
  const mapStyle = useStyles()

  const onChangeSlider = (event: any, value: number) => {
    if (value > (maxTime - 10)) {
      updateTimeLineData({ fetching: true })
      setTimeout(() => {
        updateTimeLineData({
          minTime: maxTime - 15,
          maxTime: (maxTime + 150) > 2020 ? 2020 : (maxTime + 200),
          fetching: false,
        })
      }, 1000)
    }
    updateTimeLineData({ currentTime: value })
    return value
  }

  useEffect(() => {
    getTimeLineData(currentTime)
  }, [currentTime, getTimeLineData])

  return (
    <MarginMenuTopStyled>
      {fetchingData ? <CenterStyled><LoadingComponent /></CenterStyled>
        : <MarginForFixedBottomFrameStyled>
          <div style={{ height: '1000px'}}></div>
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
  fetchingData: state.historicalMaps?.fetchingData
})

const mapDispatch = {
  updateTimeLineData,
  getTimeLineData
}

export default connect(mapState, mapDispatch)(VietMapComponent)