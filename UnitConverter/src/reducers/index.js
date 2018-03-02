import { combineReducers } from 'redux';

import { navigationReducer } from "../AppNavigation";
import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import categoriesReducer from './categoriesReducer';

export default reducers = combineReducers({
  nav: navigationReducer,
  baseValue: baseValueReducer,
  category: categoryReducer,
  categories: categoriesReducer
});