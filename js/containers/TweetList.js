import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Tweet from '../components/Tweet'
import {deleteTweet, editTweet} from '../actions'

let TweetList = ({ tweets, deleteTweet, editTweet }) => {
  return (
    <div className="tweet-list">
      {tweets.map(tweet =>
        <Tweet
          key={tweet.id}
          {...tweet}
          onClickDeleteButton={() => deleteTweet(tweet.id)}
          onEditText={(text) => editTweet(tweet.id, text)}
        />
      )}
    </div>
  )
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteTweet: PropTypes.func.isRequired,
  editTweet: PropTypes.func.isRequired
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
    editTweet: (id, text) => {
      dispatch(editTweet(id, text))
    }
  }
}

TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList)
export default TweetList
