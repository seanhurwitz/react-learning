import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
  let ingredient = undefined;
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={classes.Meat}></div>;
      break;
    case 'egg':
      ingredient = <div className={classes.Egg}></div>;
      break;
    case 'salad':
      ingredient = <div className={classes.Salad}></div>;
      break;
    case 'macon':
      ingredient = <div className={classes.Macon}></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
