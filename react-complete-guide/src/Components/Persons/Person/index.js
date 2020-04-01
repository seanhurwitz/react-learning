import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import { withClass } from '../../../hoc';
import authContext from '../../../context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = authContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      <Fragment>
        <p>
          {this.context.authenticated ? 'Authenticated!' : 'Please Log in...'}
        </p>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        {!!this.props.children && <p>{this.props.children}</p>}
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
