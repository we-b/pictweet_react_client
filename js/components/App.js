import React from 'react'
import TweetForm from '../containers/TweetForm'
import TweetList from '../containers/TweetList'

const App = () => (
  <div className="contents row">
    <TweetForm />
    <TweetList />
  </div>
)

export default App
