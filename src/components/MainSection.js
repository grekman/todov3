import React, { Component, PropTypes } from 'react'
import Task from './Task';

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    // actions: PropTypes.object.isRequired
  }

  render() {
    const { todos, actions} = this.props
     return (
      <section className="my-main">
        <ul className="my-todo-list">
          {todos.map(todo =>
            <Task key={todo.id} todo={todo} {...actions}/>
          )}
        </ul>
      </section>
    )
  }
}
