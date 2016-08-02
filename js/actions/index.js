let nextTweetId = 0
export const addTweet = (text) => {
  return {
    type: 'ADD_TWEET',
    id: nextTweetId++,
    text: text
  }
}

export const onTweetClick = () => {
  return {
    type: 'ON_TWEET_CLICK'
  }
}
