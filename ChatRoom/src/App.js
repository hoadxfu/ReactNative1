/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import AppNavigation, { navReducer } from './AppNavigation';

const appReducer = combineReducers({
  nav: navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
// const middleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => state.nav,
// );

const store = createStore(
  appReducer,
  // applyMiddleware(middleware),
);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
