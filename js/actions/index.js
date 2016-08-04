import $ from 'jquery'

let nextTweetId = 0
export const addTweet = (text, image) => {
  return {
    type: 'ADD_TWEET',
    id: nextTweetId++,
    text: text,
    image: image
  }
}

export const deleteTweet = (id) => {
  return {
    type: 'DELETE_TWEET',
    id: id
  }
}

export const editTweetText = (id, text) => {
  return {
    type: 'EDIT_TWEET_TEXT',
    id: id,
    text: text
  }
}

export const editTweetImage = (id, image) => {
  return{
    type: 'EDIT_TWEET_IMAGE',
    id: id,
    image: image
  }
}

const receiveTweets = (data) => {
  return {
    type: 'RECEIVE_TWEETS',
    tweets: data.tweets
  }
}

export const fetchTweets = () => {
  return (dispatch) => {
    return $.getJSON('http://localhost:3000/api/tweets')
      .done(data => dispatch(receiveTweets(data)))
      .fail(data => console.log(data))
  }
}
