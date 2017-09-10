import React, { Component } from 'react';
import './App.css';
import AddToDo from '../containers/AddToDo';
import TodoListWrapper from '../containers/ToDoListWrapper';
import Filters from './Filters';

class App extends Component {

  _onCreateNewToDo = (newToDoItem) => {
    console.log('create new to do');
    console.log(newToDoItem);
  }

  render() {
    return (
      <div className="App">
        <AddToDo onCreateNewTodo={this._onCreateNewToDo}/>
        <TodoListWrapper />
        <Filters />
      </div>
    );
  }
}

export default App;
