import { CHANGE_BASE_VALUE, CHANGE_CATEGORY_ID } from './types';

export const changeBaseValue = (newValue) => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const changeCategoryId = (id) => ({
  type: CHANGE_CATEGORY_ID,
  payload: id
});