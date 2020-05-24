import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import store from './store'
import App from './components/App'
import reset from './constants/css/reset'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`${reset}`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Provider store={store}>
          <App />
        </Provider>
        <GlobalStyle />
      </>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
