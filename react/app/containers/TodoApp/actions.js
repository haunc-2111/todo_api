/*
 *
 * TodoApp actions
 *
 */

import * as types from './constants';

export const getListItems = () => ({
  type: types.GET_LIST_ITEMS,
});

export const getListItemsSuccess = listItems => ({
  type: types.GET_LIST_ITEMS_SUCCESS,
  data: listItems,
});

export const getListItemsFailure = error => ({
  type: types.GET_LIST_ITEMS_SUCCESS,
  error,
});
