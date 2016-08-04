import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Tweet from '../components/Tweet'
import {deleteTweetAsync, editTweetTextAsync, editTweetImageAsync, fetchTweets} from '../actions'

let TweetList = ({ tweets, deleteTweetAsync, editTweetTextAsync, editTweetImageAsync, fetchTweets }) => {
  return (
    <div className="tweet-list">
      <a onClick={
          e => {
            e.preventDefault()
            fetchTweets()
          }
        }>更新</a>
      {tweets.map(tweet =>
        <Tweet
          key={tweet.id}
          {...tweet}
          onClickDeleteButton={() => deleteTweetAsync(tweet.id)}
          onEditText={(text) => editTweetTextAsync(tweet.id, text)}
          onEditImage={(image) => editTweetImageAsync(tweet.id, image)}
        />
      )}
    </div>
  )
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteTweetAsync: PropTypes.func.isRequired,
  editTweetTextAsync: PropTypes.func.isRequired,
  editTweetImageAsync: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweetAsync: (id) => {
      dispatch(deleteTweetAsync(id))
    },
    editTweetTextAsync: (id, text) => {
      dispatch(editTweetTextAsync(id, text))
    },
    editTweetImageAsync: (id, image) => {
      dispatch(editTweetImageAsync(id, image))
    },
    fetchTweets: () => {
      dispatch(fetchTweets())
    }
  }
}

TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList)
export default TweetList
