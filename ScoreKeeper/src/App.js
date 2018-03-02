/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import AppNavigation from './AppNavigation';
import ListGameScreen from './containers/ListGameScreen';

const persistData = store => next => action => {
  next(action);
  asyncSaveAppState(store.getState());
};

const asyncSaveAppState = async ({}) => {
  try {
    await AsyncStorage.setItem('@appState', JSON.stringify({}));
  } catch (err) {
    console.log(err);
  }
};

export default class App extends PureComponent {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this._loadAppState();
  }

  _loadAppState = () => {
    // const savedState = await AsyncStorage.getItem('@appState');
    this.setState({
      isLoading: false,
      store: createStore(
        reducers,
        {}
        // applyMiddleware(persistData)
      )
    });
  };

  render() {
    return this.state.isLoading ? (
      <Text>Loading...</Text>
    ) : (
      <Provider store={this.state.store}>
        <AppNavigation />
      </Provider>
    );
  }
}
