import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TextInput {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  }
});
