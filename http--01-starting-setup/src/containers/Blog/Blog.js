import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/AsyncComponent';
import './Blog.css';
import Posts from './Posts';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
class Blog extends Component {
  state = {
    auth: true,
  };
  newPostHandler = (post) => {
    const newPost = { ...post, id: Math.ceil(Math.random() * 100000) };
    const posts = [...this.state.posts, newPost];
    this.setState({ posts });
  };
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="my-active">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post" exact activeClassName="my-active">
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth && (
            <Route path="/new-post" component={AsyncNewPost} />
          )}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
