import React from 'react'
import { connect } from 'react-redux'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

interface VietMapProps {
  geography: any,
  text: any
}

interface VietMapState { }

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {
  const { geography } = props
  return (
    <ComposableMap
        projectionConfig={{ scale: 1800 }}
        width={980}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <ZoomableGroup center={[104, 17]}>
          <Geographies geography={geography}>
            {({ geographies }) => {
              return geographies.map(
                (geography, i) =>
                  geography.id !== 'ATA' && (
                    <Geography
                      key={i}
                      geography={geography}
                      style={{
                        default: {
                          fill: '#808080',
                          stroke: '#212529',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#e6dfd9',
                          stroke: '#212529',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  ),
              )
            }
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
  )
}

interface RootState {
  vietMap: any
}

const mapState = (state: RootState) => ({
  geography: state.vietMap?.geography
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(VietMapComponent)