/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ColorButton from './components/ColorButton';
import GamePlay from './containers/GamePlay';
import GameOver from './containers/GameOver';
import StyleDemo from './containers/StyleDemo';
import Sound from 'react-native-sound';

const GAME_PLAY = 1;
const HINTING = 0;
const GAME_OVER = -1;

export default class App extends PureComponent {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0,
    gameState: GAME_PLAY,
    flashIndex: 0
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, flashIndex, score } = this.state;
    input === targetInput[userInputIndex]
    ? this.setState({
      userInputIndex: userInputIndex + 1
    }, this._toNextLevel)
    : this.setState({ gameState: GAME_OVER });
  }

  _toNextLevel = () => {
    const { targetInput, userInputIndex, score } = this.state;
    if (userInputIndex === targetInput.length) {
      this.setState({ 
        score: score + 1,
        targetInput: this._nextLevel(targetInput),
        userInputIndex: 0
      }, () => {
        setTimeout(this._onButtonFlashCompleted, 500);
      });
    } 
  }

  _nextLevel = (targetInput) => targetInput.concat(this._randomInt(0, 3))

  _randomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min)

  _random = () => {
    let targetInput = Array.from(
      { length: this.state.userInputIndex + 1 },
      () => this._randomInt(0, 3));
    this.setState({ targetInput });
  }

  _onButtonFlashCompleted = () => {
    const { flashIndex, targetInput } = this.state;
    this.setState({
      flashIndex: -1
    }, () => {
      this.setState({
        flashIndex: flashIndex < targetInput.length - 1
          ? flashIndex + 1
          : -1
      });
    });
  }

  _replay = () => {
    this.setState({
      score: 0,
      targetInput: [],
      userInputIndex: 0,
      gameState: GAME_PLAY,
      flashIndex: 0
    }, () => this._random());
  }

  componentDidMount() {
    this._random();
  }

  render() {
    const { score, targetInput, flashIndex, gameState } = this.state;
    return (
      // <StyleDemo />
      gameState == GAME_PLAY
      ? <GamePlay
        score={score}
        targetInput={targetInput}
        flashIndex={flashIndex}
        onPress={this._onPress}
        onButtonFlashCompleted={this._onButtonFlashCompleted}
        />
      : <GameOver score={score} replay={this._replay} />
    );
  }
}
