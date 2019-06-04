import React, { Component } from 'react';
import { Container} from 'reactstrap';
import { NavMenu } from './NavMenu';
import Footer from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <div className="clearfix" style={container}> {this.props.children}</div>
        {/* <Container>
          {this.props.children}
        </Container> */}
        <Footer/>>
      </div>
    );
  }
}

const container = {
  margin:"10px"
}
