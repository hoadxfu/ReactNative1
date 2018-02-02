import React, { PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import UnitSelector from '../components/UnitSelector';

import { categories } from '../database.json';
import Theme from '../Theme';
import { connect } from 'react-redux';
import { changeCategoryId } from '../actions';

class CategoryScreen extends PureComponent {
  _handleChangeCategory = (id) => {
    this.props.changeCategoryId(id);
    this.props.toggleScreen();
  }

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (
    <UnitSelector
      item={{ title: item.name, id: item.id }}
      isEven={index % 2 == 0}
      onPress={() => this._handleChangeCategory(item.id)}
      selected={this.props.category == item.id}
    />
  );

  render() {
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <View style={styles.nav}>
          <View style={styles.navLeft}>
            <TouchableOpacity style={styles.navButton} onPress={this.props.toggleScreen}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navCenter}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Categories</Text>
          </View>
          <View style={styles.navRight} />
        </View>
        <FlatList
          style={{ backgroundColor: Theme.bgPrimary, flex: 1 }}
          data={categories}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
  },
  navLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  navCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  navButton: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  }
});

const mapAppStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeCategoryId: (id) => dispatch(changeCategoryId(id))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen);
