import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';
import { Toolbar, SideDrawer } from '../Navigation';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  sideDrawerToggleHandler = () => {
    const showSideDrawer = !this.state.showSideDrawer;
    this.setState({ showSideDrawer });
  };
  render() {
    return (
      <Fragment>
        <SideDrawer
          show={this.state.showSideDrawer}
          clicked={this.sideDrawerToggleHandler}
        />
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
