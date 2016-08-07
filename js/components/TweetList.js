import React, { PropTypes } from 'react'
import Tweet from '../components/Tweet'

class TweetList extends React.Component{
  render(){
    return(
      <div className="tweet-list">
        {this.props.tweets.map((tweet) =>
          <Tweet
            key={tweet.id}
            {...tweet}
            onClickDeleteButton={() => this.props.deleteTweet(tweet.id)}
            onBlurInputField={(text, type) => this.props.updateTweet(tweet.id, text, type)}
          />
        )}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteTweet: PropTypes.func.isRequired,
  updateTweet: PropTypes.func.isRequired,
}

export default TweetList
