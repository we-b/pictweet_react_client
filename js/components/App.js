import React from 'react'
import Footer from './Footer'
import AddTweet from '../containers/AddTweet'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTweet />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
