import React from 'react'
import MapViewer from './vietnam/mapView'
import PeopleViewer from './vietnam/peopleView'

interface TimeLineProps {
  mapData: any,
  peopleData: any
}

const TimeLineViewer = (props: TimeLineProps) => {
  const { mapData, peopleData } = props
  return (
    <>
      <MapViewer data={mapData} />
      <PeopleViewer data={peopleData}/>
    </>
    
  )
}

export default TimeLineViewer