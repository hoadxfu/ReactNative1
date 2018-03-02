import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import RoundItem from '../components/RoundItem'


export default class Round extends PureComponent {
  
  
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => <RoundItem item={item} />;

  render() {
    return <View style={styles.container} onPress={this.props.onPress}>
        <View style={{borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 10}}>
          <Text>{this.props.name}</Text>
        </View>

        <FlatList style={{paddingVertical: 10}}data={this.props.players} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginVertical: 4
  }
});
