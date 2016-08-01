import React, { PropTypes } from 'react'
import Tweet from './Tweet'

const TweetList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Tweet
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TweetList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TweetList