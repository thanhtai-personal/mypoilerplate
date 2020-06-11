import React from 'react'
import { connect } from 'react-redux'
import VietMap from './vietMap'
import { getGeographyData, updateGeographyPath } from 'root/actions/vietMap'

interface VietMapProps {
  geography: any,
  geographyPath: String,
  text: any,
  getGeographyData: any,
  loadingGeo: Boolean,
  updateGeographyPath: any
}

interface VietMapState { }

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {
  const { geography, text, getGeographyData, loadingGeo, geographyPath, updateGeographyPath } = props
  return (<>
    <VietMap geography={geography} text={text} loading={loadingGeo} updateGeographyPath={updateGeographyPath}
      getGeographyData={getGeographyData} geographyPath={geographyPath} />
  </>)
}

interface RootState {
  vietMap: any
}

const mapState = (state: RootState) => ({
  geography: state.vietMap?.geography,
  geographyPath: state.vietMap?.geographyPath,
  loadingGeo: state.vietMap?.loadingGeography
})

const mapDispatch = {
  getGeographyData,
  updateGeographyPath
}

export default connect(mapState, mapDispatch)(VietMapComponent)