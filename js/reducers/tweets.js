const tweet = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        id: action.id,
        text: action.text
      }
    case 'ON_TWEET_CLICK':
    default:
      return state
  }
}

const tweets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return [
        ...state,
        tweet(undefined, action)
      ]
    case 'ON_TWEET_CLICK':
      tweet(undefined, action)
      return state
    default:
      return state
  }
}

export default tweets
