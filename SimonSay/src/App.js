/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ColorButton from './components/ColorButton';
import GamePlay from './containers/GamePlay';
import GameOver from './containers/GameOver';

const GAME_PLAY = 0;
const GAME_OVER = 1;

export default class App extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0,
    gameState: GAME_PLAY
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, score } = this.state;
    input === targetInput[userInputIndex]
    ? this.setState({
      score: score + 1,
      userInputIndex: userInputIndex + 1
    }, () => this.state.userInputIndex === this.state.targetInput.length && this._random())
    : this.setState({ gameState: GAME_OVER });
  }

  _random = () => {
    let targetInput = Array.from(
      { length: this.state.userInputIndex + 1 },
      () => Math.floor((Math.random() * 3) + 0));
    this.setState({ 
      targetInput,
      userInputIndex: 0
    });
  }

  _replay = () => {
    this.setState({
      score: 0,
      targetInput: [],
      userInputIndex: 0,
      gameState: GAME_PLAY 
    }, () => this._random());
  }

  componentDidMount() {
    this._random();
  }

  render() {
    const { score, targetInput, gameState } = this.state;
    return (
      gameState == GAME_PLAY
      ? <GamePlay score={score} targetInput={targetInput} onPress={this._onPress} />
      : <GameOver score={score} replay={this._replay} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
