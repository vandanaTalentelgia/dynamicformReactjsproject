import React from "react";
import { Form, Row } from 'react-bootstrap'
function CheckboxComponent(props) {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.Controlcheckbox1">
      <Row className="formControl" style={{ display: 'flex'}}>
        <Form.Label style={{textAlign: 'justify'}}>{props.checkbox.label}<span style={{ color: 'red' }}>{props.checkbox.required ? '*' : ''}</span></Form.Label></Row>
        <Row className="formControl" style={{ display: 'flex' }}>
          {props.checkbox.options
            .filter(option => option.option !== '' && option.value !== '')
            .map((d, index) => (
              <div key={index} className="mb-3">
                <Form.Check type='checkbox' aria-label="Default checkbox example" label={d.option} value={d.value} style={{ float: 'inline-start' }}>
                </Form.Check>
              </div>
            ))}
        </Row>
      </Form.Group>
    </Form>
  )

}
export default CheckboxComponent;