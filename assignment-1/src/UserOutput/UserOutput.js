import React from 'react';
import './UserOutput.css';

const UserOutput = props => (
    <div>
        <p className="par1">
            {`${props.username}, `}
            {props.par1}
        </p>
        <p className="par2">{props.par2}</p>
    </div>
);

export default UserOutput;
