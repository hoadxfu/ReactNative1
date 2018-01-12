import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import ColorButton from '../components/ColorButton';

class GamePlay extends Component {
  state = {  }
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>{this.props.score}</Text>
        <Text>{this.props.targetInput.toString()}</Text>
        <ColorButton onPress={() => this.props.onPress(0)} background='red' />
        <ColorButton onPress={() => this.props.onPress(1)} background='yellow' />
        <ColorButton onPress={() => this.props.onPress(2)} background='blue' />
        <ColorButton onPress={() => this.props.onPress(3)} background='green' />
      </View>
    );
  }
}

export default GamePlay;