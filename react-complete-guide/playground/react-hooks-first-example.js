import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {
                name: 'Sean',
                age: 28,
            },
            {
                name: 'Tammy',
                age: 31,
            },
            {
                name: 'Jason',
                age: 11,
            },
        ],
    });
    const [randomChoiceState, setRandomChoiceState] = useState(
        Math.floor(Math.random() * personsState.persons.length),
    );
    const switchNameHandler = () => {
        let randomChoice = Math.floor(
            Math.random() * personsState.persons.length,
        );
        while (randomChoice === randomChoiceState) {
            randomChoice = Math.floor(
                Math.random() * personsState.persons.length,
            );
        }
        setRandomChoiceState(randomChoice);
    };

    return (
        <div className="App">
            <h1>Hi! I'm a React App!</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[randomChoiceState].name}
                age={personsState.persons[randomChoiceState].age}
            />
        </div>
    );
};

export default app;

// personsState = {
//     persons: [
//         {
//             name: 'Sean',
//             age: 28,
//         },
//         {
//             name: 'Tammy',
//             age: 31,
//         },
//         {
//             name: 'Jason',
//             age: 11,
//         },
//     ],
//     randomChoice: Math.floor(Math.random() * 3),
// };

// switchNameHandler = () => {
//     let randomChoice = Math.floor(Math.random() * this.personsState.persons.length);
//     while (randomChoice === this.personsState.randomChoice) {
//         randomChoice = Math.floor(Math.random() * this.personsState.persons.length);
//     }
//     this.setPersonsState({
//         randomChoice,
//     });
// };
