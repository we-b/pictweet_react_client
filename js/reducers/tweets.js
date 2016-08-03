const tweet = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        id: action.id,
        text: action.text
      }
      case 'EDIT_TWEET':
        console.log(action.id)
        console.log(state.id)
        if(state.id !== action.id){
          return state
        }
        return Object.assign({}, state, {
          text: action.text
        })
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
    case 'DELETE_TWEET':
      return state.filter(tweet =>
        tweet.id !== action.id
      );
    case 'EDIT_TWEET':
      console.log(state)
      return state.map( t =>
        tweet(t, action)
      )
    default:
      return state
  }
}

export default tweets
