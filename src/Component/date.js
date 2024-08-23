import React from "react";
import {Form} from 'react-bootstrap'
function DateComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.Controldate1">
    <Form.Label  style={{float:'left'}}>{props.date.label}<span style={{color:'red'}}>{props.date.required ? '*':''}</span></Form.Label>
    <Form.Control
    type="date"
    placeholder={props.date.placeholder}
    aria-label="Disabled input example"
  />
  </Form.Group> 
   </Form>  
)

}
export default DateComponent;