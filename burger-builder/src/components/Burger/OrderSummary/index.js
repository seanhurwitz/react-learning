import React, { Fragment, Component } from 'react';
import { Button } from '../../UI';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[Order Summary Will Update]');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingredient) => (
        <li key={ingredient}>
          <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
          {this.props.ingredients[ingredient]}
        </li>
      ),
    );
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total Price: <strong>${this.props.totalPrice.toFixed(2)}</strong>
        </p>

        <Button buttonType="Danger" clicked={this.props.cancel}>
          KEEP BUILDING
        </Button>
        <Button buttonType="Success" clicked={this.props.continue}>
          CHECKOUT
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
