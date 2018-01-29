import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Theme from '../Theme';

export default class UnitSelector extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          this.props.isEven && { backgroundColor: Theme.bgSecondary2 }
        ]}
      >
        <Text style={[
          styles.nameText,
          this.props.selected && { color: '#e6e600' }
        ]}>{this.props.item.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 16
  }
});
