import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const tweetApp = combineReducers({
  todos,
  visibilityFilter
})

export default tweetApp
