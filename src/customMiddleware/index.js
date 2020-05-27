import React, { Suspense, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import eventEmitter from 'event-emitter'
import { CircularProgress } from '@material-ui/core'
import en from './../constants/languages/en.json'
import lanuageConfig from './../constants/languages'

const _eventEmitter = eventEmitter()

export const requireAuth = (ComposedComponent) => {
  class RequireAuthComponent extends React.PureComponent {
    // Push to login route if not authenticated on mount

    // getToken() {
    //   return window.localStorage.getItem('jwtToken');
    // }

    // componentWillMount() {
    //   if (_.isNil(this.getToken())) {
    //     this.props.history.push('/login')
    //   } else {
    //     this.props.getAuthData()
    //   }
    // }

    // componentDidUpdate() {
    //   let { isRedirect, from, to, updateRedirectData } = this.props
    //   if (isRedirect && from === window.location.pathname) {
    //     updateRedirectData()
    //     this.props.history.push(to)
    //   }
    // }

    // // Push to login route if not authenticated on update
    // componentWillUpdate(nextProps) {
    //   if (_.isNil(this.getToken())) {
    //     this.props.history.push('/login')
    //   }
    // }

    // Otherwise render the original component
    render () {
      return <ComposedComponent {...this.props} />
    }

  }

  function mapStateToProps () {
    return {};
  }

  return connect(mapStateToProps, {})(RequireAuthComponent)

}

export const useLayout = (Layout, ComposedComponent) => {
  class UseHeaderComponent extends React.PureComponent {
    render () {
      return (
        < React.Fragment >
          {Layout.header && <Layout.header history={this.props.history}/>}
          <ComposedComponent {...this.props} />
          {Layout.footer && <Layout.footer />}
        </React.Fragment >
      )
    }

  }

  return UseHeaderComponent

}

export const withEventEmitter = (ComposedComponent) => {
  class WithEventComponent extends React.PureComponent {
    render () {
      return <ComposedComponent
        eventEmitter={_eventEmitter}
        {...this.props}
      />
    }
  }
  return WithEventComponent
}

export const makeSuspenseComponent = (ComposedComponent) => {
  const SuspenseComponent = (props) => {
    return (
      <Suspense fallback={<CircularProgress />}>
        {ComposedComponent}
      </Suspense>
    )
  }

  return SuspenseComponent
}

export const useLocalization = (ComposedComponent) => {
  const LocalizedComponent = (props) => {
    const [language, setLanguage] = useState(en)
    useEffect(() => {
      setLanguage(lanuageConfig.find((lang) => lang.test?.match(window.location.href))?.value || en)
    }, [])
    return (
      <ComposedComponent lang={language} setLanguage={setLanguage}/>
    )
  }
  
  return LocalizedComponent
}