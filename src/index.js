import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/app'
import promiseMiddleware from 'redux-promise'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('container')
)
