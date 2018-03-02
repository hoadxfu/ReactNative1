import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import ListGameScreen from './containers/ListGameScreen';
import NewGameScreen from './containers/NewGameScreen';
import GameScreen from './containers/GameScreen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);
const addListener = createReduxBoundAddListener('root');

const AppNavigator = StackNavigator({
  ListGameScreen: {
    screen: ListGameScreen
  },
  NewGameScreen: {
    screen: NewGameScreen
  },
  GameScreen: {
    screen: GameScreen
  }
});

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('ListGameScreen')
);

export const navigationReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

class AppNavigation extends PureComponent {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

const mapAppStateToProps = ({ nav }) => ({ nav });

export default connect(mapAppStateToProps)(AppNavigation);
