import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainContainer from './containers/MainContainer';
import createStore from './store/createStore';
import './styles/index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);
