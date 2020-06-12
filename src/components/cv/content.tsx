import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import LoadingComponent from 'root/components/commons/loadingComponent'

const Slider = React.lazy(() => import('./sessions/slider'))
const Service = React.lazy(() => import('./sessions/service'))
const PortfolioArea = React.lazy(() => import('./sessions/portfolio'))
const Contact = React.lazy(() => import('./sessions/aboutMe'))
const Counter = React.lazy(() => import('./sessions/counter'))
const Hobbies = React.lazy(() => import('./sessions/hobbies'))

interface CVProps {
  text: any,
  service: any,
  slider: any,
  portfolio: any,
  contact: any,
  projects: any,
  hobbies: any
}

interface CVState { }

const CVComponent = (props: CVProps, state: CVState) => {
  const { service, slider, portfolio, contact, projects, hobbies, text } = props
  const makeSuspenseComponent = (component: any) => (<Suspense fallback={<LoadingComponent />}>{component}</Suspense>)
  return (<>
    {makeSuspenseComponent(<Slider text={text?.slider} data={slider} />)}
    {makeSuspenseComponent(<Service text={text?.service} data={service} />)}
    {makeSuspenseComponent(<PortfolioArea text={text?.slider} data={portfolio} />)}
    {makeSuspenseComponent(<Contact text={text?.contact} data={contact} />)}
    {makeSuspenseComponent(<Counter text={text?.projects} data={projects} />)}
    {makeSuspenseComponent(<Hobbies text={text?.hobbies} data={hobbies} />)}
  </>)
}

interface RootState {
  cv: any
}

const mapState = (state: RootState) => ({
  service: state.cv?.service,
  slider: state.cv?.slider,
  portfolio: state.cv?.portfolio,
  contact: state.cv?.contact,
  projects: state.cv?.projects,
  hobbies: state.cv?.hobbies
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(CVComponent)