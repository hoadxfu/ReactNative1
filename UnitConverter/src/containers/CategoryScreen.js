import React, { PureComponent } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

import UnitSelector from '../components/UnitSelector';

import { categories } from '../database.json';
import Theme from '../Theme';

class CategoryScreen extends PureComponent {
  _handleSelectUnit = id => console.log(id);

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (
    <UnitSelector
      item={{ title: item.name, id: item.id }}
      isEven={index % 2 == 0}
      onPress={() => this._handleSelectUnit(item.id)}
      // selected={this.state.selectedUnitId == item.id}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title='Toggle Screen' onPress={this.props.toggleScreen} />
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

export default CategoryScreen;
