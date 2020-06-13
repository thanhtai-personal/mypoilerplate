import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Slider } from '@material-ui/core'
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    width: '300px',
  },
})

const CustomSliderStyled = styled.div`
  background-color: lightblue;
  padding-left: 25px;
  .MuiSlider-track {
    background-color: orange;
  }
  .MuiSlider-mark {
    width: 2px;
    height: 10px;
    top: 10px;
  }
  .MuiSlider-markActive {
    background-color: green;
  }
  .MuiSlider-rail {
    background-color: gray;
  }
  .MuiSlider-markLabel {
    font-weight: bolder;
  }
`

const valuetext = (value: number) => {
  return `${value}`
}

const defaultMark = [
  {
    value: -300,
    label: 'III TCN'
  },
  {
    value: -208,
    label: '208TCN'
  }
]

const TimeSlider = (props: any) => {
  const classes = useStyles()
  const { text, timelineStyle, customValueText, customMark, minTime, maxTime, timeValue, step
    , onchange } = props

  return (
    <CustomSliderStyled>
      <div className={timelineStyle || classes.root}>
        <Typography id='discrete-slider-custom' gutterBottom>
          {text?.timeLine || 'Timeline'}
        </Typography>
        <Slider
          defaultValue={timeValue || -300}
          getAriaValueText={customValueText || valuetext}
          aria-labelledby='discrete-slider-custom'
          step={step || 1}
          marks={customMark || defaultMark}
          min={minTime || -300}
          max={maxTime || 100}
          valueLabelDisplay='auto'
        />
      </div>
    </CustomSliderStyled>
  )
}

export default TimeSlider