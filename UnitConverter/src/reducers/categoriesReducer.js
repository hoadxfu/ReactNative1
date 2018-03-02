import { categories } from '../database.json';
import { CURRENCY_REQUEST_SUCCESS } from '../actions/types';

const parseAPIData = data => ({
  id: 3,
  name: 'Currency',
  items: Object.keys(data.quotes).map((key, index) => ({
      id: index + 1,
      title: key.substring(3),
      ratio: 1/data.quotes[key]
    }))
});

export default (categoriesReducer = (state = categories, action) =>
  action.type === CURRENCY_REQUEST_SUCCESS
    ? [...categories, parseAPIData(action.payload)]
    : state);
