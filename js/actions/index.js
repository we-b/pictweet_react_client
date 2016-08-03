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
