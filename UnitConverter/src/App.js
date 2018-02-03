import React, { PureComponent } from 'react';
import { View, Text, AsyncStorage  } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppNavigation from './AppNavigation';

import reducers from './reducers';

const persistData = store => next => action => {
  next(action);
  asyncSaveAppState(store.getState());
}

const asyncSaveAppState = async ({ baseValue, category }) => {
  try {
    await AsyncStorage.setItem('@appState', JSON.stringify({ baseValue, category }));
  }
  catch(err) {
    console.log(err);
  }
}

class App extends PureComponent {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this._loadAppState();
  }

  _loadAppState = async () => {
    const savedState = await AsyncStorage.getItem('@appState');
    this.setState({
      isLoading: false,
      store: createStore(
        reducers,
        JSON.parse(savedState) || {},
        applyMiddleware(persistData)
      )
    })
  }

  render() {
    return (
      this.state.isLoading
      ? <Text>Loading...</Text>
      : <Provider store={this.state.store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
