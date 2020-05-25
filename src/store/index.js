import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from '../reducers'

const middleware = applyMiddleware(createSagaMiddleware(), logger)

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    reduxDevTools(
        middleware
    )
)

export default store