import React, { Component } from 'react';
import { DayPanels } from '../../components';

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
        breakfast: ['Bran Flakes and Milo'],
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
  render() {
    return <DayPanels days={this.state.days} />;
  }
}

export default MyClass;
