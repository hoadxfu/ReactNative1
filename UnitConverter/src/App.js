/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Big from 'big.js';
import ConvertColumn from './components/ConvertColumn';
import Theme from './Theme';

export default class App extends PureComponent {
  state = {
    items: [
      {id: 1, title: 'Meter', ratio: 1},
      {id: 2, title: 'Decimeter', ratio: 0.1},
      {id: 3, title: 'Centimeter', ratio: 0.01},
      {id: 4, title: 'Milimeter', ratio: 0.001},
    ],
    baseValue: 0
  }

  _updateBaseValue = (baseValue) => this.setState({ baseValue });

  render() {
    const { items, baseValue } = this.state;
    return (
      <View style={styles.container}>
        <ConvertColumn
          items={items}
          baseValue={baseValue}
          updateBaseValue={this._updateBaseValue}
        />
        <ConvertColumn
          items={items}
          baseValue={baseValue}
          updateBaseValue={this._updateBaseValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: Theme.bgPrimary
  }
});
