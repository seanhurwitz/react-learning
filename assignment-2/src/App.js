import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';
import Char from './Char';

class App extends Component {
  state = {
    text: 'Hello!',
  };
  changeHandler = event => {
    this.setState({
      text: event.target.value,
    });
  };
  removeCharHandler = idx => {
    const newText = this.state.text.split('');
    newText.splice(idx, 1);
    this.setState({ text: newText.join('') });
  };
  render() {
    const notGoodLength = this.state.text.trim().length < 5;
    const validationSetup = {
      text: notGoodLength ? 'TEXT TOO SHORT' : 'TEXT LONG ENOUGH!',
      style: {
        color: notGoodLength ? 'red' : 'green',
        textAlign: 'center',
      },
    };
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeHandler}
        />
        <Char text={this.state.text} removeChar={this.removeCharHandler} />
        <Validation config={validationSetup} />
      </div>
    );
  }
}

export default App;
