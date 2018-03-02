import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class GameItem extends PureComponent {
  render() {
    return (
      <TouchableOpacity style = {styles.container}>
        <View style={styles.column}>
          <Text>{this.props.item.name}</Text>
        </View>
        <View style={[styles.column, {alignItems: "flex-end"}]}>
          <Text>{this.props.item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  column: {
    flex: 1,
  
  }

})
