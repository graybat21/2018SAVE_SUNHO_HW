import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <div className="container">
    <div className="jumbotron text-center">
      <div className="row">
        <div className="col-sm">
          <ul className="list-group list-group-flush">
            {todos.map(todo =>
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
