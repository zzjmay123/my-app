import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/NameCard'
import NameCard from "./component/NameCard";
import LikesButton from "./component/LikesButton";
import CommentBox from "./component/CommentBox"

import DigitalClock from "./component/DigitalClock"
import CommentList from "./component/CommentList"
const tags = ['恐龙','火影忍者']
class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      comments:['this is my first comment']
    }
    this.addComment= this.addComment.bind(this)
  }

  addComment(comment){

    this.setState({
      comments:[...this.state.comments,comment]
    })

  }

  render() {
    const {comments} = this.state
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>

          <CommentList comments={comments}></CommentList>
          <CommentBox
              commentsLength={comments.length}
              onAddComment={this.addComment}
          ></CommentBox>
        </div>
    );
  }
}


export default App;
