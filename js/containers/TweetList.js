import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Tweet from '../components/Tweet'
import {onTweetClick} from '../actions'

let TweetList = ({ tweets, tweetClick }) => {
  return (
    <ul>
      {tweets.map(tweet =>
        <Tweet
          key={tweet.id}
          {...tweet}
          onClick={() => tweetClick()}
        />
      )}
    </ul>
  )
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  tweetClick: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tweetClick: () => {
      dispatch(onTweetClick())
    }
  }
}

TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList)
export default TweetList
