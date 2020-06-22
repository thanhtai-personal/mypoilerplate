import React, { Suspense, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './style.scss'
import LoadingComponent from 'root/components/commons/loadingComponent'
import { withEventEmitter } from 'root/customMiddleware'
import { EVENT_EMITTER_COMMAND } from 'root/constants/cv/enums'
import { CustomScrollBarStyled } from 'root/constants/commonStyled'

const RainEffect = React.lazy(() => import('../commons/effects/rain'))
const SnowFallEffect = React.lazy(() => import('../commons/effects/snowFall'))
// const SnowFallSlowEffect = React.lazy(() => import('./effects/snowFallSlow'))
const Music = React.lazy(() => import('./music'))
const FacebookMessenger = React.lazy(() => import('./facebook/messenger'))
const ContentComponent = React.lazy(() => import('./content'))

interface CVProps {
  text: any,
  eventEmitter: any
}

interface CVState { }

const CVComponent = (props: CVProps, state: CVState) => {
  const { text } = props
  const [showRain, setShowRain] = useState(false)
  const [showSnow, setShowSnow] = useState(false)
  // const [showSnowSlow, setShowSnowSlow] = useState(false)
  const [showMusic, setShowMusic] = useState(false)
  const [showFacebookMessenger, setShowFacebookMessenger] = useState(false)
  const makeSuspenseComponent = (component: any) => (<Suspense fallback={<LoadingComponent />}>{component}</Suspense>)
  useEffect(() => {
    props.eventEmitter.on('promp-action', (message: String) => {
      switch (message) {
        case EVENT_EMITTER_COMMAND.clearRain:
          setShowRain(false)
          break
        case EVENT_EMITTER_COMMAND.clearAll:
          setShowRain(false)
          setShowSnow(false)
          // setShowSnowSlow(false)
          break
        case EVENT_EMITTER_COMMAND.showAll:
          setShowRain(true)
          setShowSnow(true)
          // setShowSnowSlow(true)
          break
        case EVENT_EMITTER_COMMAND.showRain:
          setShowRain(true)
          break
        case EVENT_EMITTER_COMMAND.showSnow:
          setShowSnow(true)
          break
        case EVENT_EMITTER_COMMAND.clearSnow:
          setShowSnow(false)
          break
        // case EVENT_EMITTER_COMMAND.showSnowSlow:
        //   setShowSnowSlow(true)
        //   break
        // case EVENT_EMITTER_COMMAND.clearSnowSlow:
        //   setShowSnowSlow(false)
        //   break
        case EVENT_EMITTER_COMMAND.showMusic:
          setShowMusic(true)
          break
        case EVENT_EMITTER_COMMAND.hideMusic:
          setShowMusic(false)
          break
        case EVENT_EMITTER_COMMAND.showFaceBookMess:
          setShowFacebookMessenger(true)
          break
        default:
          break
      }
    })
  }, [ props.eventEmitter ])
  return (
    <CustomScrollBarStyled>
      {showRain && <RainEffect />}
      {showSnow && <SnowFallEffect />}
      {/* {showSnowSlow && <SnowFallSlowEffect />} */}
      <ContentComponent text={text} />
      {showMusic && makeSuspenseComponent(<Music listAudioUrl={[]} />)}
      {showFacebookMessenger && makeSuspenseComponent(<FacebookMessenger />)}
    </CustomScrollBarStyled>
  )
}

interface RootState {
  cv: any
}

const mapState = (state: RootState) => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(withEventEmitter(CVComponent))