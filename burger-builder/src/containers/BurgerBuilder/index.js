import React, { Component, Fragment } from 'react';
import {
  Burger,
  BuildControls,
  Modal,
  OrderSummary,
  Spinner,
} from '../../components';
import { withErrorHandler } from '../../hoc';

import methods from './methods';
import { axiosForOrders } from '../../axios-instances';
class BurgerBuilder extends Component {
  state = {
    ingredients: {},
    ingredientOrder: [],
    totalPrice: 0,
    purchasing: false,
    loading: false,
    orderProcessed: false,
    orderError: false,
    error: false,
  };

  componentDidMount() {
    axiosForOrders
      .get('/ingredients.json')
      .then((res) => {
        this.setState({ ingredients: { ...res.data } });
      })
      .catch((error) => {});
  }

  purchaseHandler = () => {
    methods.purchaseToggle(this);
  };
  purchaseContinueHandler = () => {
    methods.purchaseContinue(this, axiosForOrders);
  };
  addIngredientHandler = (type) => {
    methods.addIngredient(this, type);
  };
  removeIngredientHandler = (type) => {
    methods.removeIngredient(this, type);
  };
  resetIngredientsHandler = () => {
    const ingredients = { ...this.state.ingredients };
    for (let key in ingredients) {
      ingredients[key].quantity = 0;
    }
    this.setState({ ingredients, totalPrice: 0, ingredientOrder: [] });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key].quantity <= 0;
    }
    const orderSummary = this.state.loading ? (
      <Spinner />
    ) : (
      <OrderSummary
        cancel={this.purchaseHandler}
        continue={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        processed={this.state.orderProcessed}
        errored={this.state.orderError}
      />
    );
    return (
      <Fragment>
        <Modal show={this.state.purchasing} clicked={this.purchaseHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredientOrder} />
        <BuildControls
          ingredients={Object.keys(this.state.ingredients)}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          reset={this.resetIngredientsHandler}
        />
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axiosForOrders);
