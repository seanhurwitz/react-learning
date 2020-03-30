import React from 'react';
import './UserInput.css';

const UserInput = props => (
    <div>
        <input
            type="text"
            onKeyPress={props.changed}
            defaultValue={props.username}
        />
    </div>
);

export default UserInput;
