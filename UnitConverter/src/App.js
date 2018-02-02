import React, { PureComponent } from 'react';
import { View, Text,  } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import AppNavigation from './AppNavigation';

import reducers from './reducers';

const store = createStore(reducers);

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
