import React from "react";
import { Form, Row } from 'react-bootstrap'
function RadioComponent(props) {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.Controlradio1">
      <Row className="formControl" style={{ display: 'flex'}}>
        <Form.Label style={{textAlign: 'justify'}}>{props.radio.label}<span style={{ color: 'red' }}>{props.radio.required ? '*' : ''}</span></Form.Label></Row>
        <Row className="formControl" style={{ display: 'flex' }}>
          {props.radio.options
            .filter(option => option.option !== '' && option.value !== '')
            .map((d, index) => (
              <div key={index} className="mb-3">
                <Form.Check type='radio' aria-label="Default Radio example" label={d.option} value={d.value} style={{ float: 'inline-start' }} name="radio">
                </Form.Check>
              </div>
            ))}
        </Row>
      </Form.Group>
    </Form>
  )

}
export default RadioComponent;