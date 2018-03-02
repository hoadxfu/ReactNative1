import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PlayerScore extends PureComponent {
  render() {
    return (
      <View style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.column}>{this.props.item.name}</Text>
        <View style={{ alignItems: 'flex-end', paddingRight: 10 }}>
          <Text style={[styles.column]}>{this.props.item.score}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: 'rgb(218, 232, 251)',

    flexDirection: 'row'
  },
  column: {
    flex: 1
  }
});
