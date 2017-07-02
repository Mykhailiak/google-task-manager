import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function(initialState = {}) {
  const middlewares = [
    thunk
  ];

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}
