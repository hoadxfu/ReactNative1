import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ColorButton extends Component {
  render() {
    const { size } = this.props;
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
        <View style={[ styles.colorView,
          { backgroundColor: this.props.background } 
        ]}></View>
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