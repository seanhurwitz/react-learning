import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
    state = {
        username: 'Sean',
    };
    changeUsernameHandler = event => {
        if (event.key === 'Enter')
            this.setState({
                username: event.target.value,
            });
    };
    render() {
        return (
            <div className="App">
                <UserInput
                    username={this.state.username}
                    changed={this.changeUsernameHandler}
                />
                <UserOutput
                    par1="Hello!"
                    par2="I Love you!"
                    username={this.state.username}
                />
            </div>
        );
    }
}

export default App;
