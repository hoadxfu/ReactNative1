import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';

import Input from '../components/Input';
import Player from '../components/Player';
import Button from '../components/Button';

export default class NewGameScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : 'New Game'
  });

  state = {
    players: [{ id: 1, name: 'Shounen A' }, { id: 2, name: 'Shounen B' }],
    gameName: ''
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => <Player item={item} />;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Input
          style={{
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            padding: 5
          }}
          onChangeText={text => this.setState({ gameName: text })}
          placeholder="Game Name..."
          value={this.state.gameName}
        />
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 22,
            marginBottom: 8
          }}
        >
          Players
        </Text>
        <FlatList
          data={this.state.players}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Button style={{ backgroundColor: 'rgb(218, 232, 251)'}}>Add Player</Button>
        <Button onPress={() => this.props.navigation.navigate('GameScreen')}>Start Game</Button>
      </View>
    );
  }
}
