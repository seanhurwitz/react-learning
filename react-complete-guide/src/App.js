import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
  };
  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => person.id === id);
    persons[personIndex].name = event.target.value;
    this.setState({ persons });
  };
  toggleVisibilityHandler = () => {
    const showOrHide = this.state.showOrHide === 'HIDE' ? 'SHOW' : 'HIDE';
    const buttonDisplayText = showOrHide;
    this.setState({ showOrHide, buttonDisplayText });
  };
  deletePersonHandler = index => {
    const persons = this.state.persons.filter((p, idx) => idx !== index);
    const buttonDisplayText =
      persons.length === 0 ? 'NOTHING TO SHOW!' : this.state.buttonDisplayText;
    this.setState({
      persons,
      buttonDisplayText,
    });
  };
  buttonHoverEnter = () => {
    const buttonDisplayText = this.state.showOrHide;
    this.setState({ buttonDisplayText });
  };
  buttonHoverLeave = () => {
    const buttonDisplayText =
      this.state.showOrHide === 'HIDE' ? 'SHOWING' : 'HIDING';
    this.setState({ buttonDisplayText });
  };
  render() {
    const willHide = this.state.showOrHide === 'HIDE';
    const btnClasses = [classes.Button];
    btnClasses.push(willHide ? classes.Green : classes.Red);
    const persons = willHide && (
      <div>
        {this.state.persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={event => this.nameChangedHandler(event, person.id)}
          />
        ))}
      </div>
    );

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi! I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>THIS IS WORKING!</p>
        <button
          className={btnClasses.join(' ')}
          onClick={this.toggleVisibilityHandler}
          onMouseEnter={this.buttonHoverEnter}
          onMouseLeave={this.buttonHoverLeave}
        >
          {this.state.buttonDisplayText}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
