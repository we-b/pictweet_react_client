import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Tweet from '../components/Tweet'
import {deleteTweetAsync, editTweetText, editTweetImage, fetchTweets} from '../actions'

let TweetList = ({ tweets, deleteTweetAsync, editTweetText, editTweetImage, fetchTweets }) => {
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
          onEditText={(text) => editTweetText(tweet.id, text)}
          onEditImage={(image) => editTweetImage(tweet.id, image)}
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
  editTweetText: PropTypes.func.isRequired,
  editTweetImage: PropTypes.func.isRequired
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
    editTweetText: (id, text) => {
      dispatch(editTweetText(id, text))
    },
    editTweetImage: (id, image) => {
      dispatch(editTweetImage(id, image))
    },
    fetchTweets: () => {
      dispatch(fetchTweets())
    }
  }
}

TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList)
export default TweetList
