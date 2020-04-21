import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';
import { Toolbar, SideDrawer } from '../Navigation';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };
  render() {
    return (
      <Fragment>
        <SideDrawer
          show={this.state.showSideDrawer}
          clicked={this.sideDrawerToggleHandler}
        />
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
