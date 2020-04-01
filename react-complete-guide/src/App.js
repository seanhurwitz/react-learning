import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Components/Persons';
import Cockpit from './Components/Cockpit';
import { Aux, withClass } from './hoc';
import AuthContext from './context';
class App extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: 'Sean',
        age: 28,
      },
      {
        id: '2',
        name: 'Tammy',
        age: 31,
      },
      {
        id: '3',
        name: 'Jason',
        age: 11,
      },
    ],
    randomChoice: Math.floor(Math.random() * 3),
    showOrHide: 'HIDE',
    buttonDisplayText: 'SHOWING',
    authenticated: false,
  };

  nameChangedHandler = (event, id) => {
    const value = event.target.value;
    this.setState((prevState, props) => {
      const persons = [...prevState.persons];
      const personIndex = persons.findIndex(person => person.id === id);
      persons[personIndex].name = value;
      return { persons };
    });
  };
  toggleVisibilityHandler = () => {
    this.setState((prevState, props) => {
      if (prevState.persons.length > 0) {
        const showOrHide = prevState.showOrHide === 'HIDE' ? 'SHOW' : 'HIDE';
        const buttonDisplayText = showOrHide;
        return { showOrHide, buttonDisplayText };
      }
    });
  };
  deletePersonHandler = index => {
    this.setState((prevState, props) => {
      const persons = prevState.persons.filter((p, idx) => idx !== index);
      const buttonDisplayText =
        persons.length === 0 ? 'NOTHING TO SHOW!' : prevState.buttonDisplayText;
      return {
        persons,
        buttonDisplayText,
      };
    });
  };
  buttonHoverEnter = () => {
    this.setState((prevState, props) => {
      const buttonDisplayText =
        prevState.persons.length === 0
          ? prevState.buttonDisplayText
          : prevState.showOrHide;
      return { buttonDisplayText };
    });
  };
  buttonHoverLeave = () => {
    this.setState((prevState, props) => {
      const buttonDisplayText =
        prevState.persons.length === 0
          ? prevState.buttonDisplayText
          : prevState.showOrHide === 'HIDE'
          ? 'SHOWING'
          : 'HIDING';
      return { buttonDisplayText };
    });
  };
  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  render() {
    const willHide = this.state.showOrHide === 'HIDE';

    const persons = willHide && (
      <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
      />
    );

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            appTitle={this.props.appTitle || "Where's my Title?"}
            willHide={willHide}
            personsLength={this.state.persons.length}
            buttonDisplayText={this.state.buttonDisplayText}
            clicked={this.toggleVisibilityHandler}
            enter={this.buttonHoverEnter}
            leave={this.buttonHoverLeave}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
