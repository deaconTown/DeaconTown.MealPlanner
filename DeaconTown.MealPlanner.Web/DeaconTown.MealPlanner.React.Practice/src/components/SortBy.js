import React, { Component } from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

export class SortBy extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropDownOpen: false
        }
    }

    toggle(){
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        });
    }

    render() {
        return (
           <ButtonDropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} style={{float:"right", padding:"0 10px ", display:"inline"}}>
        <DropdownToggle caret>
          Sort By:  
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem header>Header</DropdownItem> */}
          <DropdownItem>Recently Added</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Ascending</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Descending</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Tried</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
        )
    }
}

export default SortBy
