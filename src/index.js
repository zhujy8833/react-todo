import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import todoAppReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const store = createStore(todoAppReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
