import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native'

class StyleDemo extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        <View style={[ styles.container, { flex: 1 } ]}>
          <Text> Hello! </Text>
        </View>
        <View style={{
          flex: 2,
          backgroundColor: 'blue'
        }}>
          <Text> Hello! </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
})

export default StyleDemo;
