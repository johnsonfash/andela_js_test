/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userData from './reducers/user';
import ui from './reducers/ui';

const appReducer = combineReducers({
  userData: userData,
  ui:ui
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
};

let composeEnhancers = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, middleware);

export default store;
