import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import beef from './img/beef.jpg'
import fish from './img/fish.jpg'

export class MealList extends Component {

  state = {
    category: ['chicken', 'beef', 'fish']
  };

  state = {
    meals: [
      {
        id: 1,
        name: 'chicken',
        image: beef,
        category: 'category[0]',
        lengh: '20 min',
        difficulty: 'easy',
        method: ''
      },
      {
        id: 2,
        name: 'beef',
        image: beef,
        category: 'category[1]',
        lengh: '30 min',
        difficulty: 'medium',
        method: ''
      },
      {
        id: 3,
        name: 'fish',
        image: fish,
        category: 'category[2]',
        lengh: '6 min',
        difficulty: 'hard',
        method: ''
      }
    ]
  };

  showMeal = (meal) => {
    return (//might change to cards
      
          <Col xs="6" sm="4" style={{borderBottom: "1px dotted black"  }}>
            <ul style={{ decoration: "none" }}>
              <li> <img src={meal.image} style={{ height: "150px", width: "150px", padding: "10px" }} /> </li>
              <li>{meal.id}</li>
              <li>{meal.name}</li>
              <li>{meal.category}</li>
              <li>{meal.length}</li>
              <li>{meal.difficulty}</li>
              <li>{meal.method}</li>
            </ul>
          </Col>

    );
  }



  render() {
    return this.state.meals.map((meal) => (
      this.showMeal(meal)
    ));
  }
}

export const rowStyle = {
  
}


export default MealList