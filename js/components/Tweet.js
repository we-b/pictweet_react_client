import React, { PropTypes } from 'react'

const Tweet = ({ onClickDeleteButton, onEditText ,text }) => (
  <div className="content__post">
    <div className="more">
      <span>
        <img></img>
      </span>
      <ul className="more_list">
        <li>
          <a onClick={onClickDeleteButton}>削除</a>
        </li>
      </ul>
    </div>
    <input type="text" defaultValue={text} onBlur={e => {
      onEditText(e.target.value);
    }}/>
  </div>
)

Tweet.propTypes = {
  onClickDeleteButton: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Tweet
