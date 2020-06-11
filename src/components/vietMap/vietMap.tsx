import React, { useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import { CenterStyled } from 'root/constants/commonStyled'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

interface VietMapProps {
  geography: any,
  text: any,
  getGeographyData: any,
  loading: Boolean,
  geographyPath: String,
  updateGeographyPath: any
}

interface VietMapState {}

const VietMapComponent = (props: VietMapProps, state: VietMapState) => {
  const { geography, getGeographyData, geographyPath, loading, text } = props 
  useEffect(() => {
    getGeographyData && typeof getGeographyData === 'function' && getGeographyData(geographyPath)
  }, [ geographyPath, getGeographyData ])
  if (loading) {
    return (<CenterStyled><LinearProgress />{text.loadingMap}</CenterStyled>)
  }
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

export default VietMapComponent