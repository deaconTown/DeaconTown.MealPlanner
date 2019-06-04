import React, { Component } from 'react';
import MealList from "./MealList";
import {clearfix} from 'reactstrap';

export class SearchBar extends Component {
    render() {
        return (
            <div className="clearfix" style={searchStyle}>
                <input type="text" name="" id="" />
            </div>
        )
    }
}

export default SearchBar

//filter
const menuFilter = (searchWord) => {
    searchWord.filter (menu => menu === searchWord)
}

const searchStyle = {
    //width: "40%",
    float:"right",
    padding:"10px",
    
}