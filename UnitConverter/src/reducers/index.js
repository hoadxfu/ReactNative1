import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';

export default reducers = combineReducers({
  baseValue: baseValueReducer,
  category: categoryReducer
});