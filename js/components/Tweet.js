import React, { PropTypes } from 'react'

const Tweet = ({ onClickDeleteButton, onEditText, onEditImage ,text, image }) => (
  <div className="content__post" style={{ backgroundImage: `url(${image})`}}>
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
    <p>{text}</p>
    <input type="text" defaultValue={text} onBlur={e => {
      onEditText(e.target.value);
    }}/>
    <br></br>
    <input type="text" defaultValue={image} onBlur={e => {
        onEditImage(e.target.value);
    }}/>
  </div>
)

Tweet.propTypes = {
  onClickDeleteButton: PropTypes.func.isRequired,
  onEditText: PropTypes.func.isRequired,
  onEditImage: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Tweet
