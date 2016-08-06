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
            onEditText={(text) => this.props.editTweetText(tweet.id, text)}
            onEditImage={(image) => this.props.editTweetImage(tweet.id, image)}
          />
        )}
      </div>
    )
  }
}
//
// TweetList.propTypes = {
//   tweets: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   deleteTweet: PropTypes.func.isRequired,
//   editTweetText: PropTypes.func.isRequired,
//   editTweetImage: PropTypes.func.isRequired
// }

export default TweetList
