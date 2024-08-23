import React from "react";
import {Form} from 'react-bootstrap'
function NumberComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlNumber1">
    <Form.Label  style={{float:'left'}}>{props.number.label}<span style={{color:'red'}}>{props.number.required ? '*':''}</span></Form.Label>
    <Form.Control
    type="number"
    placeholder={props.number.placeholder}
    aria-label="Disabled input example"
  />
  </Form.Group> 
   </Form>  
)

}
export default NumberComponent;