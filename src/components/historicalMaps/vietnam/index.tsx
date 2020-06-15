import React from 'react'
import { connect } from 'react-redux'
import TimeSlider from 'root/components/commons/slider'
import { MarginMenuTopStyled, FixedBottomStyled, CenterWidthStyled } from 'root/constants/commonStyled'
import { makeStyles } from '@material-ui/core/styles'
import { updateTimeLineData } from 'root/actions/historicalMaps'
import LoadingComponent from 'root/components/commons/loadingComponent'

interface VietMapProps {
  text: any,
  eventTimes: any
  minTime: number,
  maxTime: number,
  currentTime: number,
  updateTimeLineData: any,
  fetching: Boolean
}

interface VietMapState { }

const useStyles = makeStyles({
  timelineStyle: {
    width: '95vw',
  },
})

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {

  const { text, eventTimes, minTime, maxTime, currentTime, fetching
    , updateTimeLineData } = props
  const mapStyle = useStyles()

  const onChangeSlider = (value : number) => {
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

  const setCurrentTime = (value: number) => {
    updateTimeLineData({ currentTime: value })
  }

  return (<MarginMenuTopStyled>
    <FixedBottomStyled>
    {fetching ? 
    <CenterWidthStyled><LoadingComponent /></CenterWidthStyled>
    : <TimeSlider
      timelineStyle={mapStyle.timelineStyle} text={text}
      customMark={eventTimes}
      minTime={minTime}
      maxTime={maxTime}
      customValueText={onChangeSlider || (() => {})}
      setCurrentTime={setCurrentTime}
      defaultTimeValue={-300}
    />}
    </FixedBottomStyled>
  </MarginMenuTopStyled>)
}

interface RootState {
  historicalMaps: any
}

const mapState = (state: RootState) => ({
  eventTimes: state.historicalMaps?.eventTimes,
  minTime: state.historicalMaps?.minTime,
  maxTime: state.historicalMaps?.maxTime,
  currentTime: state.historicalMaps?.currentTime,
  fetching: state.historicalMaps?.fetching
})

const mapDispatch = {
  updateTimeLineData
}

export default connect(mapState, mapDispatch)(VietMapComponent)