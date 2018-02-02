import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import { navigationReducer } from '../AppNavigation';

export default reducers = combineReducers({
  nav: navigationReducer,
  baseValue: baseValueReducer,
  category: categoryReducer
});