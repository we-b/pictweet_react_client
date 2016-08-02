import React, { PropTypes } from 'react'

const Tweet = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Tweet.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Tweet
