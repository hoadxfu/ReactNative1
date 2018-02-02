import React, { PureComponent } from 'react';
import { View, Text,  } from 'react-native';

import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import ConvertScreen from './containers/ConvertScreen';
import CategoryScreen from './containers/CategoryScreen';
import { connect } from 'react-redux';

const AppNavigator = StackNavigator({
  ConvertScreen: {
    screen: ConvertScreen
  },
  CategoryScreen: {
    screen: CategoryScreen
  }
});

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('ConvertScreen')
);

export const navigationReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

class AppNavigation extends PureComponent {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const mapAppStateToProps = ({ nav }) => ({ nav });

export default connect(mapAppStateToProps)(AppNavigation);
