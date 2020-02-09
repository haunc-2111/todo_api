/**
 *
 * TodoList
 *
 */

import React from 'react';
import TodoItem from 'components/TodoItem/Loadable';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TodoList({ listItems }) {
  const listItemsRender = listItems.map(item => (
    <TodoItem
      key={item.id}
      item = {item}
    />
  ));

  return listItemsRender;
}

TodoList.propTypes = {
  listItems: PropTypes.array,
};

export default TodoList;
