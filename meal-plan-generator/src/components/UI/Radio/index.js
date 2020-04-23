import React from 'react';
import classes from './Radio.module.css';

const radio = (props) => (
  <div className={classes.Radio}>
    {props.options.map((option) => (
      <div
        key={option}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <label htmlFor={option}>{option}</label>
        <input
          type="radio"
          id={option}
          name="choices"
          value={option}
          defaultChecked={option === 'Daily'}
        />
      </div>
    ))}
  </div>
);

export default radio;
