import $ from 'jquery'

export const postTweetAsync = (text, image) => {
  return (dispatch) => {
    return $.ajax({
      url: 'http://localhost:3000/api/tweets',
      type: 'post',
      dataType: 'json',
      data: { text: text, image: image }
    })
    .done(data => dispatch(addTweet(data.tweet)))
    .fail(data => console.log(data))
  }
}

const addTweet = (tweet) => {
  return {
    type: 'ADD_TWEET',
    id: tweet.id,
    text: tweet.text,
    image: tweet.image
  }
}

export const deleteTweetAsync = (id) => {
  return (dispatch) => {
    return $.ajax({
      url: `http://localhost:3000/api/tweets/${id}`,
      type: 'delete',
      dataType: 'json',
      data: { id: id }
    })
    .done(data => dispatch(deleteTweet(data.tweet)))
    .fail(data => console.log(data))
  }
}

const deleteTweet = (tweet) => {
  return {
    type: 'DELETE_TWEET',
    id: tweet.id
  }
}

export const editTweetTextAsync = (id, text) => {
  return (dispatch) => {
    return $.ajax({
      url: `http://localhost:3000/api/tweets/${id}`,
      type: 'put',
      dataType: 'json',
      data: { id: id, text: text }
    })
    .done(data => dispatch(editTweetText(data.tweet)))
    .fail(data => console.log(data))
  }
}

const editTweetText = (tweet) => {
  return {
    type: 'EDIT_TWEET_TEXT',
    id: tweet.id,
    text: tweet.text
  }
}

export const editTweetImageAsync = (id, image) => {
  return (dispatch) => {
    return $.ajax({
      url: `http://localhost:3000/api/tweets/${id}`,
      type: 'put',
      dataType: 'json',
      data: { id: id, image: image }
    })
    .done(data => dispatch(editTweetImage(data.tweet)))
    .fail(data => console.log(data))
  }
}


const editTweetImage = (tweet) => {
  return{
    type: 'EDIT_TWEET_IMAGE',
    id: tweet.id,
    image: tweet.image
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
