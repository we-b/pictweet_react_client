import React from 'react'
import TweetForm from './TweetForm'
import TweetList from './TweetList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tweets: []
    }
  }
  uuid(){
    let i, random;
    let uuid = '';
    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }
  handleTweetSubmit(text, image){
    this.setState({tweets: [...this.state.tweets, {id: this.uuid(), text, image}]})
  }
  render(){
    return(
      <div className="contents row">
        <TweetForm onTweetSubmit={this.handleTweetSubmit.bind(this)}/>
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App
