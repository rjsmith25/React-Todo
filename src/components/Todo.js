import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <li
        className={this.props.todo.completed ? "strike-through" : undefined}
        onClick={this.props.HandleTodoClick}
        id={this.props.todo.id}
      >
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;
