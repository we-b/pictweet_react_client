export const createTweet = (text, image) => {
  return {
    type: 'CREATE_TWEET',
    text,
    image
  }
}

export const deleteTweet = (id) => {
  return {
    type: 'DELETE_TWEET',
    id
  }
}

export const updateTweet = (id, text, kind) => {
  return {
    type: 'UPDATE_TWEET',
    id,
    text,
    kind
  }
}
