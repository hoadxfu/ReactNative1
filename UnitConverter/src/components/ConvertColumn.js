import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import UnitDisplay from './UnitDisplay';
import UnitSelector from './UnitSelector';
import Theme from '../Theme';
import { connect } from 'react-redux';
import { changeBaseValue } from '../actions';

const COLUMN = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

class ConvertColumn extends PureComponent {
  state = {
    selectedUnitId: 1
  };

  componentWillMount() {
    this._loadSelectedUnitId();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category.id !== this.props.category.id) {
      this.setState({
        selectedUnitId: 1
      })
    }
  }

  _loadSelectedUnitId = async () => {
    const selectedUnitId = await AsyncStorage.getItem(
      `@selectedUnitId_${this.props.id}`
    );
    this.setState({
      selectedUnitId: parseInt(selectedUnitId) || 1
    });
  };

  _handleSelectUnit = selectedUnitId =>
    this.setState({ selectedUnitId }, () =>
      AsyncStorage.setItem(
        `@selectedUnitId_${this.props.id}`,
        selectedUnitId.toString()
      )
    );

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => (
    <UnitSelector
      item={item}
      isEven={index % 2 == 0}
      onPress={() => this._handleSelectUnit(item.id)}
      selected={this.state.selectedUnitId == item.id}
    />
  );

  _handleChangeText = text => {
    const { selectedUnitId } = this.state;
    const { items } = this.props;
    const selectedUnit = items.filter(item => item.id === selectedUnitId)[0];
    this.props.changeBaseValue(parseFloat(text || 0) * selectedUnit.ratio);
  };

  render() {
    const { selectedUnitId } = this.state;
    const { items, baseValue } = this.props;
    const selectedUnit = items.filter(item => item.id === selectedUnitId)[0];
    return (
      <View style={styles.column}>
        <UnitDisplay
          title={selectedUnit.title}
          value={baseValue / selectedUnit.ratio}
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

const mapAppStateToProps = state => ({
  baseValue: state.baseValue
});

const mapDispatchToProps = dispatch => ({
  changeBaseValue: newValue => dispatch(changeBaseValue(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(ConvertColumn);
