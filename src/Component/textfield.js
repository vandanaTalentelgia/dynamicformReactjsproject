import React from "react";
import { Form } from 'react-bootstrap'
function TextFieldComponent(props) {
    return (

       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextField1">
        <Form.Label  style={{float:'left'}}>{props.textField.label}<span style={{color:'red'}}>{props.textField.required ? '*':''}</span></Form.Label>
        <Form.Control
        type="text"
        placeholder={props.textField.placeholder}
        aria-label="Disabled input example"
      />
      </Form.Group> 
       </Form>                                
    )

}
export default TextFieldComponent;