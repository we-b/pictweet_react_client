import React, { PropTypes } from 'react'

const Tweet = ({ onClickDeleteButton, onEditText ,text, image }) => (
  <div className="content__post" style={{ backgroundImage: 'url(' + image + ')'}}>
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
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Tweet
