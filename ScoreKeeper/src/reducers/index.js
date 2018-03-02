import { combineReducers } from 'redux';

import { navigationReducer } from '../AppNavigation';
import gamesReducer from './gamesReducer';

export default (reducers = combineReducers({
  nav: navigationReducer,
  games: gamesReducer
}));
