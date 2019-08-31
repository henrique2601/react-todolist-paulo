import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {
  state = {
    todos: [],
    value: ''
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (this.state.value == '') {
        return
      }
      this.onAddItem()
    }
  }

  onAddItem = () => {
    this.setState(state => {
      const todos = state.todos.concat(state.value);
      return {
        todos,
        value: '',
      };
    });
  };

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  }

  onRemoveItem = i => {
    this.setState(state => {
      const todos = state.todos.filter((item, j) => i !== j);
      return {
        todos,
      };
    });
  };

  render() {
    return <>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input class="new-todo"
            autofocus autocomplete="off"
            placeholder="What needs to be done?"
            value={this.state.value}
            onChange={this.onChangeValue}
            onKeyDown={this._handleKeyDown}/>
        </header>
        <section class="main">
          <ul class="todo-list">

            {this.state.todos.map((item, index) => (
              <li class="todo" key={item}>
                <div class="view">
                  <input class="toggle" type="checkbox" v-model="todo.completed"/>
                  <label >{item}</label>
                  <button class="destroy" onClick={() => this.onRemoveItem(index)}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </> 
  }
}

export default ToDoList;