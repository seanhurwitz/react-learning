import React, { Component, Fragment } from 'react';
import { Burger, BuildControls, Modal, OrderSummary } from '../../components';

const INGREDIENT_PRICES = {
  salad: 0.5,
  egg: 0.4,
  meat: 1.3,
  macon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      macon: 0,
      egg: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState((prevValue) => ({ purchasing: !prevValue.purchasing }));
  };

  purchaseContinueHandler = () => {
    alert('CONTINUE!!!');
  };

  addIngredientHandler = (type) => {
    const ingredients = {
      ...this.state.ingredients,
    };
    ingredients[type]++;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients, totalPrice });
  };
  removeIngredientHandler = (type) => {
    const ingredients = {
      ...this.state.ingredients,
    };
    ingredients[type]--;
    const totalPrice = Math.abs(
      this.state.totalPrice - INGREDIENT_PRICES[type],
    );
    this.setState({ ingredients, totalPrice });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} clicked={this.purchaseHandler}>
          <OrderSummary
            cancel={this.purchaseHandler}
            continue={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
