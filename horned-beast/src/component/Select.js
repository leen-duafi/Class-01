import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


export class Select extends Component {

  constructor(props){
    super(props);
    this.state={
      value:0,
    } ;
  }


  onChange=(event)=> {
    this.props.changeValue(event.target.value);
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
        <h1> {this.state.value}</h1>
        <br></br>
      </div>
    );
  }
}

export default Select;
