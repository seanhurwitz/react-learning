import React from 'react';
import classes from './Plan.module.css';

const plan = (props) => {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const today = days[new Date(Date.now()).getDay()];
  const todaysMeals = props.meals[today];
  return (
    <div className={classes.Plan}>
      <h1>FOR {today}</h1>
      {Object.keys(todaysMeals).map((meal) => (
        <div key={meal}>
          <h2>{meal}</h2>
          <p>
            {
              todaysMeals[meal][
                Math.floor(Math.random() * todaysMeals[meal].length)
              ]
            }
          </p>
        </div>
      ))}
    </div>
  );
};

export default plan;
