/*
 *
 * TodoApp reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  listItems: [],
  fetching: false,
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const todoAppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_LIST_ITEMS:
        draft.fetching = true;
        break;
      case types.GET_LIST_ITEMS_SUCCESS:
        draft.fetching = false;
        draft.listItems = action.data;
        break;
      case types.GET_LIST_ITEMS_FAILURE:
        draft.fetching = false;
        draft.error = action.error;
        break;
      default:
        break;
    }
  });

export default todoAppReducer;
