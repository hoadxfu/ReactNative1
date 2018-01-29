import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Theme from '../Theme';

class UnitDisplay extends PureComponent {
  state = {
    text: this.props.value.toString()
  }

  _onChange = (text) => {
    this.setState({ text });
    this.props.onChange(text);
  }

  _onBlur = () => {
    this.setState({ text: this.props.value.toString() });
  }

  componentWillReceiveProps(nextProps) {
    if (parseFloat(this.state.text) !== nextProps.value) {
      this.setState({ text: nextProps.value.toString() });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.unitNameText}>{this.props.title}</Text>
        <TextInput
          value={this.state.text}
          style={styles.unitValueText}
          onChangeText={this._onChange}
          onBlur={this._onBlur}
          keyboardType='numeric'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.bgSecondary
  },
  unitNameText: {
    color: Theme.fontColorPrimary,
    fontSize: Theme.fontSizeLarge,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  unitValueText: {
    color: Theme.fontColorPrimary,
    fontSize: Theme.fontSizeLarge,
    padding: 12
  }
});

export default UnitDisplay;
