import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import GameItem from '../components/GameItem';
import Button from '../components/Button';

import { connect } from 'react-redux';


class ListGameScreen extends PureComponent {
  state = { data: [{ id: 1, name: 'Poker Night', time: 12312 }] };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : 'Games'
  });

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => <GameItem item={item} />;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          data={this.props.games}
        />
        <Button onPress={() => this.props.navigation.navigate('NewGameScreen')}>New Game</Button>
      </View>
    );
  }
}

const mapAppStateToProps = ({ games }) => ({ games });

export default connect(mapAppStateToProps)(ListGameScreen);
