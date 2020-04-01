import React, { Component } from "react";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import "./App.css";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      tasks: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };

    this.AddTodo = this.AddTodo.bind(this);
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.ToggleTodo = this.ToggleTodo.bind(this);
    this.HandleTodoClick = this.HandleTodoClick.bind(this);
    this.Completed = this.Completed.bind(this);
  }

  AddTodo(e) {
    e.preventDefault();
    if (this.state.newTodo) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { id: Date.now(), task: this.state.newTodo, completed: false }
        ]
      });
      this.setState({
        newTodo: ""
      });
    }
  }

  ToggleTodo(id) {
    let tasks = this.state.tasks.map(task => {
      if (id === task.id) {
        task.completed = !task.completed;
        return task;
      }
      return task;
    });
    this.setState({ tasks: tasks });
  }

  HandleInputChange(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  HandleSubmit(e) {
    this.AddTodo(e);
  }

  HandleTodoClick(e) {
    this.ToggleTodo(+e.target.id);
  }

  Completed() {
    let tasks = this.state.tasks.filter(task => {
      return task.completed !== true;
    });
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className="container">
        <div className="todoApp">
          <h1 class="title">Todo App</h1>
          <TodoList
            tasks={this.state.tasks}
            HandleTodoClick={this.HandleTodoClick}
          />
          <TodoForm
            HandleSubmit={this.HandleSubmit}
            newTodo={this.state.newTodo}
            HandleInputChange={this.HandleInputChange}
            AddTodo={this.AddTodo}
            Completed={this.Completed}
          />
        </div>
      </div>
    );
  }
}

export default App;
