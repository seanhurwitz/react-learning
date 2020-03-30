import React from 'react';
import './Char.css';

const Char = props => {
  const charStyle = {
    display: 'inline-block',
    padding: '12px',
    textAlign: 'center',
    margin: '8px',
    border: '1px solid black',
    fontSize: `${Math.max(300 / props.text.length, 12)}px`,
    width: `${Math.max(350 / props.text.length, 14)}px`,
    height: `${Math.max(350 / props.text.length, 14)}px`,
    fontWeight: 'bolder',
    backgroundColor: props.text.trim().length < 5 ? 'lightpink' : 'lightgreen',
  };
  return (
    <div>
      {props.text.split('').map((letter, idx) => (
        <p key={idx} style={charStyle} onClick={() => props.removeChar(idx)}>
          {letter}
        </p>
      ))}
    </div>
  );
};

export default Char;
