const addIngredient = (react, type) => {
  const ingredients = {
    ...react.state.ingredients,
  };
  ingredients[type].quantity++;
  const totalPrice = react.state.totalPrice + ingredients[type].price;
  const ingredientOrder = [...react.state.ingredientOrder];
  ingredientOrder.unshift(type);
  react.setState({
    ingredients,
    totalPrice,
    ingredientOrder,
  });
};

module.exports = addIngredient;
