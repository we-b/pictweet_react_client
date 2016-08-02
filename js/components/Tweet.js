import React, { PropTypes } from 'react'

const Tweet = ({ onClickDeleteButton, text }) => (
  <div className="content__post">
    <div className="more">
      <span>
        <img></img>
      </span>
      <ul className="more_list">
        <li>
          <a onClick={onClickDeleteButton}>削除</a>
        </li>
        <li>
          <a>詳細</a>
        </li>
      </ul>
    </div>
    <p>
      {text}
    </p>
    <span className="name">
    </span>
  </div>
)

Tweet.propTypes = {
  onClickDeleteButton: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Tweet
