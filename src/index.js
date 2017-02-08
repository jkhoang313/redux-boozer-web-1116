import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/app'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('container')
)
