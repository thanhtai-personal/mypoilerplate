import React from 'react'
import MapViewer from './vietnam/mapView'

interface TimeLineProps {
  mapData: any
}

const TimeLineViewer = (props: TimeLineProps) => {
  const { mapData } = props
  return (
    <>
      <MapViewer data={mapData} />
    </>
    
  )
}

export default TimeLineViewer