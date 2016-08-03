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

export const editTweet = (id, text) => {
  return {
    type: 'EDIT_TWEET',
    id: id,
    text: text
  }
}
