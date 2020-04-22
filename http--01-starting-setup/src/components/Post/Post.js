import React from 'react';

import './Post.css';

const post = (props) => (
  <article
    className={`Post ${props.active ? 'active' : ''}`}
    onClick={() => props.clicked(props.postId)}
  >
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">
        {props.author} {props.active}
      </div>
    </div>
  </article>
);

export default post;
