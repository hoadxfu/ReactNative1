import {
  CHANGE_BASE_VALUE,
  CHANGE_CATEGORY_ID,
  CURRENCY_REQUEST_LOADING,
  CURRENCY_REQUEST_SUCCESS,
  CURRENCY_REQUEST_ERROR
} from './types';

export const changeBaseValue = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const changeCategoryId = id => ({
  type: CHANGE_CATEGORY_ID,
  payload: id
});

const currencyLoadingAction = () => ({
  type: CURRENCY_REQUEST_LOADING
});

const currencySuccessAction = data => ({
  type: CURRENCY_REQUEST_SUCCESS,
  payload: data
});

const currencyErrorAction = err => ({
  type: CURRENCY_REQUEST_ERROR,
  payload: err
});

export const currencyRequestAction = () => async dispatch => {
  dispatch(currencyLoadingAction());
  try {
    const result = await fetch(
      'http://www.apilayer.net/api/live?access_key=178cccc562556ef4a2fc627884d0fd46'
    );
    const data = await result.json();
    dispatch(currencySuccessAction(data));
  } catch (err) {
    dispatch(currencyErrorAction(err));
  }
};
