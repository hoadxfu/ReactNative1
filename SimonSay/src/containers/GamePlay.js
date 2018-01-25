import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import ColorButton from '../components/ColorButton';
import Sound from 'react-native-sound';

const { width, height } = Dimensions.get('window');

class GamePlay extends PureComponent {
  state = { 
    gameBoardSize: Math.min(width, height),
    containerStyle: null,
    buttonColors: [
      '#84FF72',
      '#FF3605',
      '#9C11E8',
      '#17A2FF'
    ]
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

  _propsForButtonIndex = (index) => {
    const { gameBoardSize, buttonColors } = this.state;
    const { onPress, targetInput, flashIndex, onButtonFlashCompleted } = this.props;
    return {
      onPress: () => onPress(index),
      isFlashing: targetInput[flashIndex] === index,
      onFlashCompleted: onButtonFlashCompleted,
      size: gameBoardSize,
      background: buttonColors[index]
    }
  }

  componentDidMount() {
    Sound.setCategory('Playback');
    var whoosh = new Sound('pling1.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      whoosh.play();
    });
  }

  render() {
    const { gameBoardSize, containerStyle } = this.state;
    return (
      <View style={[ styles.container, containerStyle ]} onLayout={this._onLayout}>
        <View style={styles.scoreContainer}>
          <Text style={{ fontSize: 36, paddingBottom: 16 }}>Score</Text>
          <Text style={{ fontSize: 34 }}>{this.props.score}</Text>
        </View>
        <View style={[ styles.gameContainer, { width: gameBoardSize } ]}>
          <ColorButton {...this._propsForButtonIndex(0)} />
          <ColorButton {...this._propsForButtonIndex(1)} />
          <ColorButton {...this._propsForButtonIndex(2)} />
          <ColorButton {...this._propsForButtonIndex(3)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8CA5F'
  },
  scoreContainer: {
    flexGrow: 1,
    // marginTop: (Platform.OS === 'ios') ? 20 : 0,
    // paddingTop: 12,
    // paddingBottom: 12,
    // paddingLeft: 24,
    // paddingRight: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default GamePlay;