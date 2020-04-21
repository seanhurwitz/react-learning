import React, { Fragment } from 'react';

import Logo from '../../Logo';
import { Backdrop } from '../../UI';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.clicked} />
    <div
      className={[
        classes.SideDrawer,
        props.show ? classes.Open : classes.Close,
      ].join(' ')}
    >
      <div className={classes.Logo}>
        {' '}
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </Fragment>
);

export default sideDrawer;
