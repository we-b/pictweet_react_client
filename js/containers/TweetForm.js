import React from 'react'
import { connect } from 'react-redux'
import { addTweet } from '../actions'

let TweetForm = ({ dispatch }) => {
  let input

  return (
    <div className="tweet-form">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTweet(input.value))
        input.value = ''
      }}>
        <h3>投稿する</h3>
        <input ref={node => {
          input = node
        }} />
      <input type="submit"></ input>
      </form>
    </div>
  )
}

TweetForm = connect()(TweetForm)
export default TweetForm
