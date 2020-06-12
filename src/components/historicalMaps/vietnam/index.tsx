import React from 'react'
import { connect } from 'react-redux'

interface VietMapProps {
  text: any
}

interface VietMapState { }

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {
  // const { text } = props
  return (<>
    
  </>)
}

interface RootState {
  historicalMaps: any
}

const mapState = (state: RootState) => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(VietMapComponent)