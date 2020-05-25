import React from 'react'
import { connect } from "react-redux";
import _ from 'lodash'
import eventEmitter from 'event-emitter'

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
    render() {
      return <ComposedComponent {...this.props} />
    }

  }

  function mapStateToProps() {
    return {};
  }
  
  return connect(mapStateToProps, { })(RequireAuthComponent)

}

export const useLayout = (Layout, ComposedComponent) => {
  class UseHeaderComponent extends React.PureComponent {
    render() {
      return (
        < React.Fragment >
          {Layout.header && <Layout.header />}
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