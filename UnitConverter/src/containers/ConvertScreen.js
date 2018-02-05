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

const COLUMN = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

class ConvertScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : '',
    headerRight: (
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('CategoryScreen')}>
        <Text style={{ fontSize: 16, color: '#1980FB' }}>Categories</Text>
      </TouchableOpacity>
    )
  });

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.category.name
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category.name !== this.props.category.name) {
      this.props.navigation.setParams({
        title: nextProps.category.name
      })
    }
  }

  render() {
    const { category } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <ConvertColumn
            id={COLUMN.LEFT}
            items={category.items}
          />
          <ConvertColumn
            id={COLUMN.RIGHT}
            items={category.items}
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
  navButton: {
    paddingHorizontal: 12,
  }
});

const mapAppStateToProps = state => ({
  category: categories[state.category - 1]
});

export default connect(mapAppStateToProps)(ConvertScreen);