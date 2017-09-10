import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { VISIBILITY_FILTERS } from '../constants';

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return todos;
    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isDone);
    case VISIBILITY_FILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.isDone);
    default:
      return todos;
  }
}

const mapStateToProps = ({ visibilityFilter, todos }) => {
  return {
    todos: getFilteredTodos(todos, visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTodoItem: (todoItemIndex) => {
      dispatch(toggleTodo(todoItemIndex));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

