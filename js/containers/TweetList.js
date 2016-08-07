import React, { PropTypes } from 'react'
import Tweet from '../components/Tweet'
import { connect } from 'react-redux'
import { deleteTweet, updateTweet } from '../actions'

class TweetList extends React.Component{
  render(){
    const {tweets, updateTweet, deleteTweet} = this.props
    return(
      <div className="tweet-list">
        {tweets.map((tweet) =>
          <Tweet
            key={tweet.id}
            {...tweet}
            onClickDeleteButton={() => deleteTweet(tweet.id)}
            onBlurInputField={(text, kind) => updateTweet(tweet.id, text, kind)}
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

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweet: (id) => {
      dispatch(deleteTweet(id))
    },
    updateTweet: (id, text, type) => {
      dispatch(updateTweet(id, text, type))
    }
  }
}

TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList)

export default TweetList
