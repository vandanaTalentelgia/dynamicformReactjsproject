import React from "react";
import { Form} from 'react-bootstrap'
function SelectComponent(props) {
    return (

       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
        <Form.Label  style={{float:'left'}}>{props.select.label}<span style={{color:'red'}}>{props.select.required ? '*':''}</span></Form.Label>
      <Form.Select aria-label="Default select example">
      {props.select.options
  .filter(option => option.option !== '' && option.value !== '')
  .map((d, index) =>(
    <option key={index} value={d.value}>
      {d.option}
    </option>
  ))}
       </Form.Select>
      </Form.Group> 
       </Form>                                
    )

}
export default SelectComponent;