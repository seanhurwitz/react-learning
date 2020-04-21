import React, { Fragment } from 'react';
import { Button } from '../../UI';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => (
    <li key={ingredient}>
      <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
      {props.ingredients[ingredient]}
    </li>
  ));
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>

      <Button buttonType="Danger" clicked={props.cancel}>
        KEEP BUILDING
      </Button>
      <Button buttonType="Success" clicked={props.continue}>
        CHECKOUT
      </Button>
    </Fragment>
  );
};

export default orderSummary;
