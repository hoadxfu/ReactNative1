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
      <View style={{ marginTop: 20, flex: 1 }}>
        <View style={styles.nav}>
          <View style={styles.navLeft} />
          <View style={styles.navCenter}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Unit Converter</Text>
          </View>
          <View style={styles.navRight}>
            <TouchableOpacity style={styles.navButton} onPress={this.props.toggleScreen}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Categories</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  nav: {
    flexDirection: 'row',
  },
  navLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  navCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  navButton: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  }
});

const mapAppStateToProps = state => ({
  category: state.category
});

export default connect(mapAppStateToProps)(ConvertScreen);