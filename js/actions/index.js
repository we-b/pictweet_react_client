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

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}
