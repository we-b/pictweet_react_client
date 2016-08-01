let nextTweetId = 0
export const addTweet = (text) => {
  return {
    type: 'ADD_TWEET',
    id: nextTweetId++,
    text: text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
}
