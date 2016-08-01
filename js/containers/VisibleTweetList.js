import { connect } from 'react-redux'
import TweetList from '../components/TweetList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      console.log("onTodoClick");
    }
  }
}

const VisibleTweetList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList)

export default VisibleTweetList
