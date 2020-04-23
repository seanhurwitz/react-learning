import React, { Component } from 'react';
import { DayPanels } from '../../components';
import classes from './Body.module.css';

class MyClass extends Component {
  state = {
    days: {
      monday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      tuesday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      wednesday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      thursday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      friday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      saturday: {
        breakfast: ['Chocolate Muesli', 'Berry Muesli', 'Biscuits and Nosh'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      sunday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
    },
    planType: 'Daily',
  };

  addMealHandler = (day, meal, newMeal) => {
    const days = { ...this.state.days };
    days[day][meal].push(newMeal);
    this.setState({ days });
  };
  removeMealHandler = (day, meal, choice) => {
    const days = { ...this.state.days };
    days[day][meal].splice(days[day][meal].indexOf(choice), 1);
    this.setState({ days });
  };
  render() {
    return (
      <div className={classes.Body}>
        <DayPanels
          days={this.state.days}
          addMeal={this.addMealHandler}
          removeMeal={this.removeMealHandler}
        />
      </div>
    );
  }
}

export default MyClass;
