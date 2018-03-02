import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from './Input';

export default class RoundItem extends PureComponent {
  render() {
    return (
      <View>
        <View style={{paddingHorizontal: 10}}>
          <Text>{this.props.item.name}</Text>
        </View>

        <Input
          style={{
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            padding: 5
          }} // onChangeText={text => this.setState({ gameName: text })}
          placeholder="Enter Score ..."
          value="asdasd"
        />
      </View>
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
    marginVertical: 4
  }
});
