// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo.js";

class TodoList extends Component {
  render() {
    return (
      <ul className="todos">
        {this.props.tasks.map(todo => {
          return (
            <Todo
              key={todo.id}
              HandleTodoClick={this.props.HandleTodoClick}
              todo={todo}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
