import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="FullPost">
        <h1>{this.props.activePost.title}</h1>
        <p>{this.props.activePost.body}</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>
    );
    return post;
  }
}

export default FullPost;
