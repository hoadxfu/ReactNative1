/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import Big from 'big.js';
import ConvertColumn from '../components/ConvertColumn';
import Theme from '../Theme';

import { categories } from '../database.json';

class ConvertScreen extends PureComponent {
  state = {
    items: categories[0].items
  }

  render() {
    const { items } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button title='Toggle Screen' onPress={this.props.toggleScreen} />
        <View style={styles.container}>
          <ConvertColumn
            items={items}
          />
          <ConvertColumn
            items={items}
          />
        </View>
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

export default ConvertScreen;