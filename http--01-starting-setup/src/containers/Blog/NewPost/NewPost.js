import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: 'Max',
  };

  newPostSubmitHandler = () => {
    this.props.submitNewPost({ ...this.state });
    this.setState({
      title: '',
      body: '',
      author: 'Max',
    });
  };
  componentDidMount() {}
  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.body}
          onChange={(event) => this.setState({ body: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button
          disabled={
            this.state.title.length === 0 || this.state.author.length === 0
          }
          onClick={this.newPostSubmitHandler}
        >
          Add Post
        </button>
      </div>
    );
  }
}

export default NewPost;
