import React, { Fragment } from 'react';
import { Header } from './components';
import { Body } from './containers';
import './App.css';

const App = (props) => (
  <Fragment>
    <Header />
    <Body />
    <div>Footer</div>
  </Fragment>
);

export default App;
