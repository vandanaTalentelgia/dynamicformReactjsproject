import React from "react";
import {Form} from 'react-bootstrap'
function FileComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.Controlfile1">
    <Form.Label  style={{float:'left'}}>{props.file.label}<span style={{color:'red'}}>{props.file.required ? '*':''}</span></Form.Label>
    <Form.Control
    type="file"
    aria-label="Disabled input example"
  />
  </Form.Group> 
   </Form>  
)

}
export default FileComponent;