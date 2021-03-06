import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import ToggleButton from '../ToggleButton';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleButton clicked={props.toggleSideDrawer} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
