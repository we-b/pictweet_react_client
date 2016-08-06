import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Tweet from '../components/Tweet'
import {deleteTweetAsync, editTweetTextAsync, editTweetImageAsync, fetchTweets} from '../actions'

class TweetList extends React.Component{
  componentDidMount() {
    this.props.fetchTweets()
  }
  render(){
    return(
      <div className="tweet-list">
        {this.props.tweets.map(tweet =>
          <Tweet
            key={tweet.id}
            {...tweet}
            onClickDeleteButton={() => this.props.deleteTweetAsync(tweet.id)}
            onEditText={(text) => this.props.editTweetTextAsync(tweet.id, text)}
            onEditImage={(image) => this.props.editTweetImageAsync(tweet.id, image)}
          />
        )}
      </div>
    )
  }
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
