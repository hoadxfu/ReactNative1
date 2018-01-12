import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class GameOver extends Component {
  state = {  }
  render() {
    const { score, replay } = this.props;
    return (
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text>Game over</Text>
        <Text>Your score: {score}</Text>
        <TouchableOpacity onPress={replay}>
          <Text style={{ color: 'blue' }}>Replay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GameOver;