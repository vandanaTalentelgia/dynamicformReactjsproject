import React from "react";
import {Form} from 'react-bootstrap'
function PasswordComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.Controlpassword1">
    <Form.Label  style={{float:'left'}}>{props.password.label}<span style={{color:'red'}}>{props.password.required ? '*':''}</span></Form.Label>
    <Form.Control
    type="password"
    placeholder={props.password.placeholder}
    aria-label="Disabled input example"
  />
  </Form.Group> 
   </Form>  
)

}
export default PasswordComponent;