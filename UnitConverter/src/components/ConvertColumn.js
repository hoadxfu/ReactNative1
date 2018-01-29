import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';
import UnitDisplay from './UnitDisplay';
import UnitSelector from './UnitSelector';
import Theme from '../Theme';

class ConvertColumn extends PureComponent {
  state = {
    selectedUnitId: 3
  }

  _handleSelectUnit = (selectedUnitId) => this.setState({ selectedUnitId });

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => (
    <UnitSelector
      item={item}
      isEven={index % 2 == 0}
      onPress={() => this._handleSelectUnit(item.id)}
      selected={this.state.selectedUnitId == item.id}
    />
  );

  _handleChangeText = (text) => {
    const { selectedUnitId } = this.state;
    const { items } = this.props;
    const selectedUnit = items.filter(
      item => item.id === selectedUnitId
    )[0];
    this.props.updateBaseValue(parseFloat(text || 0) * selectedUnit.ratio );
  }

  render() {
    const { selectedUnitId } = this.state;
    const { items, baseValue } = this.props;
    const selectedUnit = items.filter(
      item => item.id === selectedUnitId
    )[0];
    return (
      <View style={styles.column}>
        <UnitDisplay
          title={selectedUnit.title}
          value={baseValue/selectedUnit.ratio}
          onChange={this._handleChangeText}
        />
        <FlatList
          data={items}
          selected={this.state.selectedUnitId}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1
  },
  unitNameText: {
    color: Theme.fontColorPrimary
  }
});

export default ConvertColumn;
