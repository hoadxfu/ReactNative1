import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Player extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text>{this.props.item.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginVertical: 4,
  }
})
