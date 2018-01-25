import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Easing
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ColorButton extends PureComponent {
  state = {
    buttonOpacity: new Animated.Value(1)
  }

  _flash = () => {
    Animated.sequence([
      Animated.timing(this.state.buttonOpacity, {
        toValue: 0.3,
        duration: 150,
        easing: Easing.ease.in
      }),
      Animated.delay(200),
      Animated.timing(this.state.buttonOpacity, {
        toValue: 1,
        duration: 150,
        easing: Easing.ease.out
      })
    ]).start(this.props.onFlashCompleted);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.isFlashing !== this.props.isFlashing
      && nextProps.isFlashing
    ) {
      this._flash();
    }
  }

  render() {
    const { size, isFlashing } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            width: size/2,
            height: size/2
          }
        ]} 
        onPress={this.props.onPress}>
        <Animated.View style={[
          styles.colorView,
          {
            opacity: this.state.buttonOpacity,
            backgroundColor: this.props.background
          } 
        ]}></Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  colorView: {
    flex: 1,
    borderRadius: 4,
    // shadowRadius: 3,
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    // shadowColor: 'black',
    // shadowOpacity: 0.3
  }
})

export default ColorButton;