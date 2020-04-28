import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate() {
    this.loadData();
  }
  loadData() {
    if (this.props.match.params.postId) {
      if (
        !this.state.loadedPost ||
        this.state.loadedPost.id !== +this.props.match.params.postId
      ) {
        Axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`,
        ).then((response) => {
          console.log(response);
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }
  render() {
    const post = this.state.loadedPost ? (
      <div className="FullPost">
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>{' '}
        <div className="Edit">
          <button className="Delete">Delete</button>{' '}
        </div>{' '}
      </div>
    ) : (
      <p>Please select a Post!</p>
    );
    return post;
  }
}

export default FullPost;
