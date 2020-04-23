import React from 'react';
import BuildControl from './BuildControl';
import classes from './BuildControls.module.css';

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        CURRENT PRICE: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {props.ingredients.map((control) => (
        <BuildControl
          key={control}
          label={control.toUpperCase()}
          added={() => props.ingredientAdded(control)}
          removed={() => props.ingredientRemoved(control)}
          disabled={props.disabled[control]}
        />
      ))}
      <div>
        <button
          className={classes.OrderButton}
          style={{ backgroundColor: 'darkred', color: 'white' }}
          disabled={Object.values(props.disabled).every((item) => item)}
          onClick={props.reset}
        >
          RESET
        </button>
        <button
          className={classes.OrderButton}
          disabled={Object.values(props.disabled).every((item) => item)}
          onClick={props.ordered}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default buildControls;
