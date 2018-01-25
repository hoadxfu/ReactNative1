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
  TextInput,
  TouchableOpacity
} from 'react-native';
import Big from 'big.js';
import Unit from './components/Unit';

const UNIT = {
  METRE: 0,
  DECIMETER: 1,
  CENTIMETRE: 2,
  MILIMETRE: 3
};

const UNIT_NAME = [
  'Metre', 'Decimeter', 'Centimetre', 'Milimetre'
]

export default class App extends PureComponent {
  state = {
    baseValue: 0,
    convertedValue: 0,
    baseUnit: UNIT.CENTIMETRE,
    convertUnit: UNIT.DECIMETER
  }

  handleChangeBaseValue = (baseValue) => {
    this.setState({ baseValue }, this._convertFromBaseValue);
  }

  handleChangeConvertedValue = (convertedValue) => {
    this.setState({ convertedValue }, this._convertFromConvertedValue);
  }

  handlePressBaseUnit = (baseUnit) => {
    this.setState({ baseUnit }, this._convertFromBaseValue);
  }

  handlePressConvertUnit = (convertUnit) => {
    this.setState({ convertUnit }, this._convertFromBaseValue);
  }

  _convertFromBaseValue = () => {
    const { baseValue, convertedValue, baseUnit, convertUnit } = this.state;
    const diff = convertUnit - baseUnit;
    if (diff > 0) {
      this.setState({ convertedValue: baseValue * Math.pow(10, Math.abs(diff)) });
    } else if (diff < 0) {
      this.setState({ convertedValue: baseValue / Math.pow(10, Math.abs(diff)) });
    } else {
      this.setState({ convertedValue: baseValue });
    }
  }

  _convertFromConvertedValue = () => {
    const { baseValue, convertedValue, baseUnit, convertUnit } = this.state;
    const diff = baseUnit - convertUnit;
    if (diff > 0) {
      this.setState({ baseValue: convertedValue * Math.pow(10, Math.abs(diff)) });
    } else if (diff < 0) {
      this.setState({ baseValue: convertedValue / Math.pow(10, Math.abs(diff)) });
    } else {
      this.setState({ baseValue: convertedValue });
    }
  }

  render() {
    const { baseValue, convertedValue, baseUnit, convertUnit } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.formCol}>
            <Text style={styles.formUnitText}>{UNIT_NAME[baseUnit]}</Text>
            <TextInput
              style={styles.formUnitText}
              keyboardType='numeric'
              onChangeText={(value) => this.handleChangeBaseValue(value)}
              value={baseValue.toString()}
            />
          </View>
          <View style={styles.formCol}>
            <Text style={styles.formUnitText}>{UNIT_NAME[convertUnit]}</Text>
            <TextInput
              style={styles.formUnitText}
              keyboardType='numeric'
              onChangeText={(value) => this.handleChangeConvertedValue(value)}
              value={convertedValue.toString()}
            />
          </View>
        </View>
        <View style={styles.listUnitContainer}>
          {UNIT_NAME.map((name, index) =>
            <View key={index} style={[
              styles.unitRow,
              (index % 2 == 0) && { backgroundColor: 'rgb(98, 70, 133)' }
            ]}>
              <Unit
                onPress={() => this.handlePressBaseUnit(index)}
                selected={index == baseUnit}
              >
                {name}
              </Unit>
              <Unit
                onPress={() => this.handlePressConvertUnit(index)}
                selected={index == convertUnit}
              >
                {name}
              </Unit>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgb(120, 86, 162)'
  },
  formContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor: 'rgb(83, 60, 112)'
  },
  formCol: {
    flex: 1,
    paddingVertical: 16,
  },
  formUnitText: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 12,
  },
  listUnitContainer: {
    flex: 1
  },
  unitRow: {
    flexDirection: 'row',
    paddingHorizontal: 12
  }
});
