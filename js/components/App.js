import React from 'react'
import AddTweet from '../containers/AddTweet'
import TweetList from '../containers/TweetList'

const App = () => (
  <div className="contents row">
    <AddTweet />
    <TweetList />
  </div>
)

export default App
