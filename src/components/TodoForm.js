import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.HandleSubmit} className="todos-form">
        <input
          value={this.props.newTodo}
          onChange={this.props.HandleInputChange}
          type="text"
          placeholder="add to todo list"
        />
        <button onClick={this.props.AddTodo}>Add Todo</button>
        <button onClick={this.props.Completed}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
