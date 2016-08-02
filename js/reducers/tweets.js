const tweet = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        id: action.id,
        text: action.text
      }
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
      return state

    case 'DELETE_TWEET':
      return state.filter(tweet =>
        tweet.id !== action.id
      );
    default:
      return state
  }
}

export default tweets
