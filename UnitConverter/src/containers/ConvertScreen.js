/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Big from 'big.js';
import ConvertColumn from '../components/ConvertColumn';
import Theme from '../Theme';

import { categories } from '../database.json';
import connect from 'react-redux/lib/connect/connect';

class ConvertScreen extends PureComponent {
  state = {
    items: categories[this.props.category - 1].items
  }

  render() {
    const { items } = this.state;
    return (
      <View style={{ flex: 1 }}>
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
    backgroundColor: Theme.bgPrimary
  }
});

const mapAppStateToProps = state => ({
  category: state.category
});

export default connect(mapAppStateToProps)(ConvertScreen);