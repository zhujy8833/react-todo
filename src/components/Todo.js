import React from 'react';
import PropTypes from 'prop-types';
import { TODO_PROPTYPE } from '../constants';
import classNames from 'classnames';
import './Todo.css';

const ButtonWrapper = ({ isDone, handleClick }) => {
  return (
    <button onClick={handleClick}>{isDone ? "Undo" : "Complete"}</button>
  );
};

export default class Todo extends React.Component {
  static propTypes = {
    todo: TODO_PROPTYPE,
    index: PropTypes.number.isRequired,
    onClickTodoItem: PropTypes.func.isRequired
  }

  onClickTodoItem = () => {
    const { index, onClickTodoItem } = this.props;

    onClickTodoItem(index);
  }

  render() {
    const { todo } = this.props;

    const className = classNames('todo-item', {
      'is-done': !!todo.isDone    
    });

    return (
      <li className={className}>
        <p>{todo.title}</p>
        <ButtonWrapper handleClick={this.onClickTodoItem} isDone={todo.isDone}/>
      </li>
    )
  }
}