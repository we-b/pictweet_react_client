import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { postTweetAsync } from '../actions'

class TweetForm extends React.Component{
  render(){
    let textField
    let imageField

    return(
      <div className="tweet-form">
        <form onSubmit={e => {
          e.preventDefault()
          if (!textField.value.trim() ||  !imageField.value.trim()) {
            return
          }
          this.props.postTweetAsync(textField.value, imageField.value)
          textField.value = ''
          imageField.value = ''
        }}>
          <h3>投稿する</h3>
          <input ref={node => {
            textField = node
          }} />

          <input ref={node => {
            imageField = node
          }} />

        <input type="submit"></ input>
        </form>
      </div>
    )
  }
}

TweetForm.propTypes = {
  postTweetAsync: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    postTweetAsync: (text, image) => {
      dispatch(postTweetAsync(text, image))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

TweetForm = connect(mapStateToProps, mapDispatchToProps)(TweetForm)
export default TweetForm
