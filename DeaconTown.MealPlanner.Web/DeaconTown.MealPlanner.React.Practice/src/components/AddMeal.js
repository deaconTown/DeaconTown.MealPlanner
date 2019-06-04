import React, { Component } from 'react';
import {Form, Label, Input, FormText, FormGroup, Button} from 'reactstrap';

export class AddMeal extends Component {//inside a pop up modal
    render() {
        return (
            <Form>
                <Label>Name</Label>
                <Input type="text"/>
                <Label>Image</Label>
                <Input type="file" name="file"/>
                <Label>Category</Label>
                <Input type="text"/>
                <Label>Length</Label>
                <Input type="text"/>
                <Label>Difficulty</Label>
                <Input type="text"/>
                <Label>Method</Label>
                <Input type="text"/>

                <Input type="submit" value="Submit"/>
            </Form>
        )
    }
}

export default AddMeal
