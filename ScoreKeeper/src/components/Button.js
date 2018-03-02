import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: 'rgb(193, 211, 193)'
  }
});
