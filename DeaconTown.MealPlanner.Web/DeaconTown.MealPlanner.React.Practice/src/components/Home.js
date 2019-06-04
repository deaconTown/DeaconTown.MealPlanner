import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { MealList, rowStyle } from './MealList';
import SortBy from './SortBy';
import Categories from './Categories';
import {Row} from 'reactstrap';

export class helperProps {

}

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div >
        <h1>deaconTown Meal Planner</h1>
        <div >
          <SortBy />
          <SearchBar />
        </div>
        <div>
          <Categories />
        </div>
        <div style={rowStyle}>
          <Row>
              <MealList />
          </Row>
          
        </div>
      </div>
    );
  }
}





