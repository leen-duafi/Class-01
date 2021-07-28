import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export class Select extends Component {

  onChange=(event)=> {
    // selectedHorns = event.target.value;
    console.log(event.target.value);
  }


  render() {
    return (
      <div>
        <h3>choose how many horns you want to see </h3>
        <Form.Select aria-label="Default select example">
          <Form.Control as="select" custom onChange={this.onChange}>

          </Form.Control>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <br></br>
      </div>
    );
  }
}

export default Select;
