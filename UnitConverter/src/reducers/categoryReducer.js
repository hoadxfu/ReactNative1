import { categories } from '../database.json';
import { CHANGE_CATEGORY_ID } from '../actions/types';

export default categoryReducer = (state = 1, action) => {
  return action.type === CHANGE_CATEGORY_ID
    ? action.payload
    : state;
}