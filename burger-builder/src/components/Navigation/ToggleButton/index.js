import React from 'react';
import hamburgerMenuIcon from '../../../assets/images/hamburger-menu-icon-white.png';

import classes from './ToggleButton.module.css';

const toggleButton = (props) => (
  <div className={classes.ToggleButton} onClick={props.clicked}>
    <img src={hamburgerMenuIcon} alt="..." />
  </div>
);

export default toggleButton;
