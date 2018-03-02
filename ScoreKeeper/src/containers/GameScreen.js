import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import PlayerScore from '../components/PlayerScore';
import Round from '../components/Round';
import Button from '../components/Button';

export default class GameScreen extends PureComponent {
  state = {
    players: [
      { id: 1, name: 'Shounen A', score: 1000 },
      { id: 2, name: 'Shounen B', score: 400 }
    ],
    gameName: 'Pocker Night'
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params
      ? navigation.state.params.title
      : 'Pocker Night',
    headerLeft: (
      <TouchableOpacity
        style={{ paddingHorizontal: 12 }}
        onPress={() => navigation.navigate('ListGameScreen')}
      >
        <Text
          style={{
            fontSize: 16,
            color: '#1980FB'
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
    )
  });

  _keyExtractor = (item, index) => item.id;

  _renderPlayerScore = ({ item, index }) => <PlayerScore item={item} />;
  _renderRound = ({ item, index }) => <PlayerScore item={item} />;

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <FlatList
          style={{ flexGrow: 0 }}
          data={this.state.players}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderPlayerScore}
        />
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 12,
            flexDirection: 'row',
            backgroundColor: 'rgb(218, 232, 251)',
            borderTopWidth: 1,
            borderTopColor: '#ddd'
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>Sum</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
            <Text>600</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, flexGrow: 1 }}>
          <Round name="Round 1" players={this.state.players} />
        </View>
        <Button>Next Round</Button>
      </View>
    );
  }
}
