import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import authContext from '../../context';

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authctx = useContext(authContext);
  useEffect(() => {
    //toggleBtnRef.current.click();
  }, []);
  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  const btnClasses = [classes.Button];
  btnClasses.push(
    props.personsLength === 0
      ? classes.Red
      : props.willHide
      ? classes.Green
      : classes.Red,
  );
  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>THIS IS WORKING!</p>
      <button
        ref={toggleBtnRef}
        className={btnClasses.join(' ')}
        onClick={props.clicked}
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
      >
        {props.buttonDisplayText}
      </button>

      <button onClick={authctx.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);
