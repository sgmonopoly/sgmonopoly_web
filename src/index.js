import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import middlewares from './middlewares'
import reducers from './reducers'

const history = createHistory()
const logger = createLogger()
const middleware = [thunkMiddleware, ...middlewares, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(...middleware)
)

ReactDOM.render(<Provider store={store}>
  {/* ConnectedRouter will use the store from Provider automatically */}
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker()