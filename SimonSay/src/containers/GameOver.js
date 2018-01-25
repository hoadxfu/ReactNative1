import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class GameOver extends PureComponent {
  state = {  }
  render() {
    const { score, replay } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 42, color: '#fff', padding: 16 }}>Game over</Text>
        <Text style={{ fontSize: 24, color: '#fff', padding: 16 }}>Your score: {score}</Text>
        <TouchableOpacity style={{
          backgroundColor: '#5C0ED0',
          borderRadius: 100,
          paddingVertical: 12,
          paddingHorizontal: 24,
          marginTop: 12
        }} onPress={replay}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Replay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#6610E8',
    flex: 1,
    justifyContent: 'center'
  }
});

export default GameOver;