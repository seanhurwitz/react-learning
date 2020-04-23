import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import classes from './Burger.module.css';
import PropTypes from 'prop-types';

const burger = (props) => {
  let transformedIngredients = props.ingredients.map((ingredient, idx) => (
    <BurgerIngredient key={ingredient + idx} type={ingredient} />
  )); /*Object.keys(props.ingredients)
    .map((ingredient) =>
      [...Array(props.ingredients[ingredient].quantity)].map((_, idx) => (
        <BurgerIngredient key={ingredient + idx} type={ingredient} />
      )),
    )
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);*/
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default burger;
