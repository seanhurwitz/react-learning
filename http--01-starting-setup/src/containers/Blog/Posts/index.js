import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.module.css';

class Posts extends Component {
  state = {
    posts: [],
    activePost: null,
  };
  postClickedHandler = (post) => {
    // const res = await axios.get(
    //   `https://jsonplaceholder.typicode.com/posts/${postId}`,
    // );
    // const activePost = { title: res.data.title, content: res.data.body };
    // this.setState({ activePost });
    this.props.history.push({ pathname: `${this.props.match.url}/${post.id}` });
    const activePost = { ...post };
    this.setState({ activePost });
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => ({ ...post, author: 'Max' }));
      this.setState({ posts: updatedPosts });
    });
  }
  render() {
    const posts = this.state.posts.map((post) => (
      //<Link key={post.id} to={`/${post.id}`}>
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postClickedHandler(post)}
        active={this.state.activePost && this.state.activePost.id === post.id}
      />
      //</Link>
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={`${this.props.match.url}/:postId`}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
