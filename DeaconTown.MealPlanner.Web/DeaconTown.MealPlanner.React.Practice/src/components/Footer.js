import React, { Component } from 'react'

export class Footer extends Component {
    getYear = new Date().getFullYear();
    render() {
        return (
            <div style={footerStyle}> 
                <i className="fa fa-copyright" aria-hidden="true">Copywright Davia &copy; {this.getYear}</i>
            </div>
        )
    }
}

export default Footer

const footerStyle = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0",
    position: "fixed",
    left: "0",
    right: "0",
    bottom: "0",
    height: "",
    width: "100%"
};

   