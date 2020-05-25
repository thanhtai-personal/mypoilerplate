import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { requireAuth, useLayout } from '../customMiddleware'

// load containers with react lazy to split code.
const HomeComponent = React.lazy(() => import('./containers/home'));

const publicRoute = [
  {
    path: '/home',
    component: HomeComponent,
    isExact: false,
    layout: {  }
  }
]

const privateRoute = [
  {
    path: '/dashboard',
    component: () => <div>test</div>,
    isExact: false,
    layout: {  } //{ header: Header, footer: Footer }
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
      <Route path="/" exact component={useLayout({ }, HomeComponent)} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes