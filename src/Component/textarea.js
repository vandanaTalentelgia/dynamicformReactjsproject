import React from "react";
import { Form } from 'react-bootstrap'
function TextAreaComponent(props) {
    return (
       <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label  style={{float:'left'}}>{props.textArea.label}<span style={{color:'red'}}>{props.textArea.required ? '*':''}</span></Form.Label>
        <Form.Control as="textarea" rows={props.textArea.rows} placeholder={props.textArea.placeholder}/>
      </Form.Group>
       </Form>                                
    )

}
export default TextAreaComponent;