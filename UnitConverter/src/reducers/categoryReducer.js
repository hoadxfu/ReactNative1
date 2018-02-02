import { categories } from '../database.json';

export default categoryReducer = (state = 0, action) => {
  return action.type === 'CHANGE_CATEGORY_ID'
    ? action.payload
    : state;
}