/**
 *
 * TodoApp
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTodoApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import TodoList from 'components/TodoList/Loadable';
import TodoForm from 'components/TodoForm/Loadable';
import {
  CssBaseline,
  Container,
} from '@material-ui/core';
import * as actions from './actions';
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export function TodoApp({
  todoApp,
  loadListItems,
}) {
  useInjectReducer({ key: 'todoApp', reducer });
  useInjectSaga({ key: 'todoApp', saga });

  useEffect(() => {
    console.log(todoApp.fetching);
    loadListItems();
    console.log(todoApp.fetching);

  }, []);
  const classes = useStyles();

  if (todoApp.fetching && !todoApp.listItems.length) {
    return (
      <div className={classes.root}>
        <Loader
          type="Circles"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    );
  }
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <CssBaseline />
        <TodoList
          listItems={todoApp.listItems}
        />
        <TodoForm />
      </Container>
    </React.Fragment>
  );
}

TodoApp.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  todoApp: makeSelectTodoApp(),
});

const mapDispatchToProps = dispatch => ({
  loadListItems: () => dispatch(actions.getListItems()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TodoApp);
