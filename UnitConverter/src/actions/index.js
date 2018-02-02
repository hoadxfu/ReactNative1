import { CHANGE_BASE_VALUE } from './types';

export const changeBaseValue = (newValue) => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});