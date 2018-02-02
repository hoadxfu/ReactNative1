import React, { PureComponent } from 'react';
import { View, Text,  } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import ConvertScreen from './containers/ConvertScreen';
import CategoryScreen from './containers/CategoryScreen';

import reducers from './reducers';

const store = createStore(reducers);

const page = {
  CATEGORY: 'CATEGORY',
  CONVERT: 'CONVERT'
}

class App extends PureComponent {
  state = {
    currentPage: page.CONVERT
  }

  _goToCategoryScreen = () => this.setState({ currentPage: page.CATEGORY });
  
  _goToConvertScreen = () => this.setState({ currentPage: page.CONVERT });

  render() {
    return (
      <Provider store={store}>
        {
          this.state.currentPage === page.CONVERT
            ? <ConvertScreen toggleScreen={this._goToCategoryScreen} />
            : <CategoryScreen toggleScreen={this._goToConvertScreen} />
        }
      </Provider>
    );
  }
}

export default App;
