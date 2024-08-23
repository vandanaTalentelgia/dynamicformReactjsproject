import React from "react";
import {Form} from 'react-bootstrap'
function EmailComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.Controlemail1">
    <Form.Label  style={{float:'left'}}>{props.email.label}<span style={{color:'red'}}>{props.email.required ? '*':''}</span></Form.Label>
    <Form.Control
    type="email"
    placeholder={props.email.placeholder}
    aria-label="Disabled input example"
  />
  </Form.Group> 
   </Form>  
)

}
export default EmailComponent;