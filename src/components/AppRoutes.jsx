import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { requireAuth, useLayout, makeSuspenseComponent } from '../customMiddleware'
import appRoutesPath from './../constants/appRoutes'

import HeaderComponent from '../components/layouts/header'
// load containers with react lazy to split code.
const HomeComponent = React.lazy(() => import('../containers/home'))
const LoginComponent = React.lazy(() => import('../containers/login'))

const publicRoute = [
  {
    path: appRoutesPath.home,
    component: makeSuspenseComponent(<HomeComponent />),
    isExact: false,
    layout: { header: HeaderComponent  } 
  },
  {
    path: appRoutesPath.login,
    component: makeSuspenseComponent(<LoginComponent />),
    isExact: false,
    layout: {  } 
  },
  {
    path: appRoutesPath.register,
    component: makeSuspenseComponent(<HomeComponent />),
    isExact: false,
    layout: {  } 
  }
]

const privateRoute = [
  {
    path: appRoutesPath.dashboard,
    component: () => <div>test</div>,
    isExact: false,
    layout: { header: HeaderComponent  } //{ header: Header, footer: Footer }
  }
]


const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={route.layout ? useLayout(route.layout, route.component) : route.component} />
  )
}

const renderPrivateRoute = () => {
  return privateRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={requireAuth(route.layout ? useLayout(route.layout, route.component) : route.component)} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={useLayout({ header: HeaderComponent }, makeSuspenseComponent(<HomeComponent />))} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes