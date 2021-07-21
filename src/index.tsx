import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer }  from './redux/rootReducer';
import { composeWithDevTools  } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
const store = createStore(rootReducer,  composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
