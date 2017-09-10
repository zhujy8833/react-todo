import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const defaultNewToDoState = {
  title: '',
  created_date: '',
  isDone: false
};

class AddToDo extends Component {
  static propTypes = {
    onCreateNewTodo: PropTypes.func.isRequired
  }

  state = defaultNewToDoState

  componentDidMount() {
    this.titleInput.focus();
  }

  _handleAddItem() {
    const { onCreateNewTodo } = this.props;
    
    const title = this.titleInput.value;
    
    if (!!title.trim()) {
      onCreateNewTodo(title);      
    }
  }

  render() {
    return (
      <div className="App__add-to-do">
        <input 
          type ="text" 
          placeholder="Your new todo item"
          ref={(input) => this.titleInput = input}
        />
        <button onClick={this._handleAddItem.bind(this)}>Add</button>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateNewTodo: (title) => {
      dispatch(addTodo(title));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddToDo);
