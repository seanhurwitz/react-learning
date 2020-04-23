import React from 'react';
import capitalize from 'capitalize';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
  const name = capitalize.words(props.type.replace('-', ' ')).replace(' ', '');
  let ingredient = undefined;
  switch (props.type) {
    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    default:
      ingredient = <div className={classes[name]}></div>;
      break;
  }
  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
