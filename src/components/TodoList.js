import React from 'react';
import PropTypes from 'prop-types';
import { TODO_PROPTYPE } from '../constants';
import Todo from './Todo';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(TODO_PROPTYPE),
    onClickTodoItem: PropTypes.func.isRequired
  }

  onClickTodoItem = (todoItemIndex) => {
    const { onClickTodoItem } = this.props;
    
    onClickTodoItem(todoItemIndex);
  }

  render() {
    const { todos } = this.props;

    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index} onClickTodoItem={this.onClickTodoItem}/>
        ))}
      </ul>
    )
  }
}