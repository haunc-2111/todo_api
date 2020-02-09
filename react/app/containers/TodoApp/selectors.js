import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the todoApp state domain
 */

const selectTodoAppDomain = state => state.todoApp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TodoApp
 */

const makeSelectTodoApp = () =>
  createSelector(
    selectTodoAppDomain,
    substate => substate,
  );

export default makeSelectTodoApp;
export { selectTodoAppDomain };
