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

export default class App extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, score } = this.state;
    input === targetInput[userInputIndex] && this.setState({
      score: score + 1,
      userInputIndex: userInputIndex + 1
    }, () => this.state.userInputIndex === this.state.targetInput.length && this._random());
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

  componentDidMount() {
    this._random();
  }

  render() {
    return (
      <View>
        <Text>hello react native</Text>
        <Text>{this.state.score}</Text>
        <Text>{this.state.targetInput.toString()}</Text>
        <ColorButton onPress={() => this._onPress(0)} background='red' />
        <ColorButton onPress={() => this._onPress(1)} background='yellow' />
        <ColorButton onPress={() => this._onPress(2)} background='blue' />
        <ColorButton onPress={() => this._onPress(3)} background='green' />
      </View>
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
