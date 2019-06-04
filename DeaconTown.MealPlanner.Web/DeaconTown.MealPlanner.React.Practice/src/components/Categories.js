import React, { Component } from 'react';
import beef from './img/beef.jpg';

export class Categories extends Component {
    render() {
        return (//might change to cards
            <div className="clearfix" style={sectionStyle}>
            <section >
              <div>
              <img src={beef} alt="Beef" style={imgStyle}/>
              </div>
              <div>
              <img src={beef} alt="Chicken" style={imgStyle} />
              </div>
              <div>
              <img src={beef} sizes="25px" alt="Fish" style={imgStyle} />
              </div>           
            </section>
          </div>
        )
    }
}

export default Categories


//section for categories
const sectionStyle = {
    padding: "0",
    height: "30%",
    width: "22%",
    float: "left",
    border: "black solid 1px",
    display: "inline"
  };
  
  const imgStyle = {
    padding: "20px"
  }
