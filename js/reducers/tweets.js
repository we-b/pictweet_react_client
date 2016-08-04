const tweet = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      console.log(action)
      return {
        id: action.id,
        text: action.text,
        image: action.image
      }
      case 'EDIT_TWEET_TEXT':
        if(state.id !== action.id){
          return state
        }
        return Object.assign({}, state, {
          text: action.text
        })
      case 'EDIT_TWEET_IMAGE':
        if(state.id !== action.id){
          return state
        }
        return Object.assign({}, state, {
          image: action.image
        })
    default:
      return state
  }
}

const tweets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return [
        tweet(undefined, action),
        ...state

      ]
    case 'DELETE_TWEET':
      return state.filter(tweet =>
        tweet.id !== action.id
      );
    case 'EDIT_TWEET_TEXT':
      return state.map( t =>
        tweet(t, action)
      )
    case 'EDIT_TWEET_IMAGE':
      return state.map( t =>
        tweet(t, action)
      )
    case 'RECEIVE_TWEETS':
      return action.tweets
    default:
      return state
  }
}

export default tweets
