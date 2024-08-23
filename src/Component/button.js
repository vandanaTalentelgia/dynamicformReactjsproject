import React from "react";
import {Form,Button} from 'react-bootstrap'
function ButtonComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.Controlbutton1">
  <Button variant={props.button.variant} type={props.button.type} onClick={()=> props.handleSave()}>
  {props.button.name} 
      </Button>
  </Form.Group> 
   </Form>  
)

}
export default ButtonComponent;