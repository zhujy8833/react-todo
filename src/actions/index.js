import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../constants';

let nextTodoId = 0
export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    title
  };
};

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};