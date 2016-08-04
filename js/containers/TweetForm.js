import React from 'react'
import { connect } from 'react-redux'
import { postTweet } from '../actions'

let TweetForm = ({ dispatch }) => {
  let textField
  let imageField

  return (
    <div className="tweet-form">
      <form onSubmit={e => {
        e.preventDefault()
        if (!textField.value.trim() ||  !imageField.value.trim()) {
          return
        }
        dispatch(postTweet(textField.value, imageField.value))
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

TweetForm = connect()(TweetForm)
export default TweetForm
