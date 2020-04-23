const purchaseContinue = (react, axios) => {
  const order = {
    ingredients: react.state.ingredients,
    price: react.state.totalPrice,
    customer: {
      name: 'Sean Hurwitz',
      address: {
        street: 'Michel Street',
        zipCode: '2192',
        country: 'South Africa',
      },
      email: 'hurwitzse@gmail.com',
    },
    deliveryMethod: 'fastest',
  };
  react.setState({ loading: true });
  axios
    .post('/orders.json', order)
    .then((res) => {
      react.setState({ loading: false, orderProcessed: true });
      setTimeout(() => {
        react.setState({ orderProcessed: false, purchasing: false });
      }, 2000);
    })
    .catch((err) => {
      react.setState({ purchasing: false, loading: false });
      // react.setState({ loading: false, orderError: true, error: err });
      // setTimeout(() => {
      //   react.setState({ orderError: false, purchasing: false });
      // }, 2000);
    });
};

module.exports = purchaseContinue;
