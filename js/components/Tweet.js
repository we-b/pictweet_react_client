import React, { PropTypes } from 'react'

const Tweet = ({ onClick, text }) => (
  <div className="content__post">
    <div className="more">
      <span>
        <img></img>
      </span>
      <ul className="more_list">
        <li>
          <a>削除</a>
        </li>
        <li>
          <a>詳細</a>
        </li>
      </ul>
    </div>
    <p onClick={onClick} >
      {text}
    </p>
    <span className="name">
    </span>
  </div>
)

Tweet.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Tweet
