import React, { PropTypes } from 'react'

class TweetForm extends React.Component{
  componentDidMount(){

  }
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
          this.props.onTweetSubmit(textField.value, imageField.value)
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
  onTweetSubmit: PropTypes.func.isRequired
}

export default TweetForm
