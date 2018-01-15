import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import ColorButton from '../components/ColorButton';

const { width, height } = Dimensions.get('window');

class GamePlay extends Component {
  state = { 
    gameBoardSize: Math.min(width, height),
    containerStyle: null
  }

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    // on user rotate screen
    if (width < height) {
      this.setState({
        gameBoardSize: width,
        containerStyle: {
          flexDirection: 'column',
        }
      });
    } else {
      this.setState({
        gameBoardSize: height,
        containerStyle: {
          flexDirection: 'row',
        }
      });
    }
  }

  render() {
    const { gameBoardSize, containerStyle } = this.state;
    // console.log(this.props.targetInput);
    return (
      <View style={[ styles.container, containerStyle ]} onLayout={this._onLayout}>
        <View style={styles.scoreContainer}>
          <Text style={{ fontSize: 28, paddingBottom: 12 }}>Score</Text>
          <Text style={{ fontSize: 28 }}>{this.props.score}</Text>
          <Text>{this.props.targetInput.toString()}</Text>
        </View>
        <View style={[ styles.gameContainer, { width: gameBoardSize } ]}>
          <ColorButton onPress={() => this.props.onPress(0)} background='red' size={gameBoardSize} />
          <ColorButton onPress={() => this.props.onPress(1)} background='yellow' size={gameBoardSize} />
          <ColorButton onPress={() => this.props.onPress(2)} background='blue' size={gameBoardSize} />
          <ColorButton onPress={() => this.props.onPress(3)} background='green' size={gameBoardSize} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18
  },
  scoreContainer: {
    flexGrow: 1,
    paddingTop: 12,
    // paddingBottom: 12,
    // paddingLeft: 24,
    // paddingRight: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default GamePlay;