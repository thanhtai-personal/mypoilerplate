import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
const ContentComponent = React.lazy(() => import('./content'))
// const MusicWrapper = React.lazy(() => import('./musicWrapper'))
// const CssEffectWrapper = React.lazy(() => import('./cssEffectWrapper'))

interface CVProps {
  text: any
}

interface CVState { }

const CVComponent = (props: CVProps, state: CVState) => {
  const { text } = props
  // const [useMusic, setUseMusic] = useState(false)
  // const [useCssEffect, setUseCssEffect] = useState(false)
  let defaultComponent = <ContentComponent text={text} />
  let renderComponent = defaultComponent
  // if (useMusic) {
  //   renderComponent = <MusicWrapper>{renderComponent}</MusicWrapper>
  // }
  // if (useCssEffect) {
  //   renderComponent = <CssEffectWrapper>{renderComponent}</CssEffectWrapper>
  // }
  return renderComponent
}

interface RootState {
  cv: any
}

const mapState = (state: RootState) => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(CVComponent)