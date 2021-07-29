import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


export class Select extends Component {

  onChange=(event)=> {
    this.setState({ value: parseInt(event.target.value)});
    console.log('hi');
    // selectedHorns = event.target.value;
    console.log(event.target.value);
  } 

  render() {
    return (
      <div>
        <p>choose how many horns you want to see </p>
        <Form.Select aria-label="Default select example" custom onChange={(event =>this.onChange(event))}>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">hunder</option>
          <option value="">all</option>
        </Form.Select>

        <br></br>
      </div>
    );
  }
}

export default Select;
