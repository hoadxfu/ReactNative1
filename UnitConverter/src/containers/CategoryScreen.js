import React, { PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import UnitSelector from '../components/UnitSelector';

import { categories } from '../database.json';
import Theme from '../Theme';
import { connect } from 'react-redux';
import { changeCategoryId } from '../actions';

class CategoryScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Categories'
  });

  _handleChangeCategory = (id) => {
    this.props.changeCategoryId(id);
    this.props.navigation.goBack();
  }

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (
    <UnitSelector
      item={{ title: item.name, id: item.id }}
      isEven={index % 2 == 0}
      onPress={() => this._handleChangeCategory(item.id)}
      selected={this.props.category == item.id}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ backgroundColor: Theme.bgPrimary, flex: 1 }}
          data={categories}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapAppStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeCategoryId: (id) => dispatch(changeCategoryId(id))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen);
