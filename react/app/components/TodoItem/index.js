/**
 *
 * TodoItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
} from '@material-ui/icons';

function TodoItem({ item }) {
  return (
    <ListItem
      ContainerComponent= 'div'
    >
      <ListItemAvatar>
        <Checkbox
          checked={item.isDone}
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object,
};

export default TodoItem;
