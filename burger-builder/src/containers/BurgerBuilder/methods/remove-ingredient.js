const removeIngredient = (react, type, price) => {
  const ingredients = {
    ...react.state.ingredients,
  };
  ingredients[type].quantity--;
  const totalPrice = Math.abs(react.state.totalPrice - ingredients[type].price);
  const ingredientOrder = [...react.state.ingredientOrder];
  ingredientOrder.splice(ingredientOrder.indexOf(type), 1);
  react.setState({
    ingredients,
    totalPrice,
    ingredientOrder,
  });
};

module.exports = removeIngredient;
