const purchaseToggle = (react) => {
  react.setState((prevValue) => ({ purchasing: !prevValue.purchasing }));
};

module.exports = purchaseToggle;
