import { combineReducers } from 'redux';
import {
  VISIBILITY_FILTERS,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO  
} from '../constants';

/**
 * 
 * You could also give them different keys, or call functions differently. These two ways to write a combined reducer are equivalent:
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
 */

const todos = (todosState = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todosState,
        {
          id: action.id,
          title: action.title,
          created_date: Date.now(),
          isDone: false
        }
      ];
    case TOGGLE_TODO:
      return todosState.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }
        return todo;
      });
    default:
      return todosState;
  }
};

const visibilityFilter = (visibilityFilterState = VISIBILITY_FILTERS.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: 
      return action.filter;
    default:
      return visibilityFilterState;
  }
};


const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
