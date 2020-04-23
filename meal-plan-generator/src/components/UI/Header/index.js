import React from 'react';
import Button from '../Button';
import Radio from '../Radio';
import classes from './Header.module.css';

const header = (props) => {
  const radioOptions = ['Daily', 'Weekly'];
  return (
    <div className={classes.Header}>
      <h1>MY MEAL PLAN GENERATOR</h1>
      <div
        style={{ height: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Radio options={radioOptions} />
        <Button>GENERATE!</Button>
      </div>
    </div>
  );
};

export default header;
