import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    activePost: null,
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => ({ ...post, author: 'Max' }));
      this.setState({ posts: updatedPosts });
      console.log(response);
    });
  }
  postClickedHandler = (post) => {
    // const res = await axios.get(
    //   `https://jsonplaceholder.typicode.com/posts/${postId}`,
    // );
    // const activePost = { title: res.data.title, content: res.data.body };
    // this.setState({ activePost });
    const activePost = { ...post };
    this.setState({ activePost });
  };
  newPostHandler = (post) => {
    const newPost = { ...post, id: Math.ceil(Math.random() * 100000) };
    const posts = [...this.state.posts, newPost];
    this.setState({ posts });
  };
  render() {
    const posts = this.state.posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postClickedHandler(post)}
        active={this.state.activePost && this.state.activePost.id === post.id}
      />
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        {this.state.activePost && (
          <section>
            <FullPost activePost={this.state.activePost} />
          </section>
        )}
        <section>
          <NewPost submitNewPost={this.newPostHandler} />
        </section>
      </div>
    );
  }
}

export default Blog;
