import React from "react";
import {Form,Row,Col} from 'react-bootstrap'
function TimeComponent(props) {
return (
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.Controltime1">
  <Row style={{textAlign:'justify'}}>
    <Form.Label  style={{float:'left'}}>{props.time.label}<span style={{color:'red'}}>{props.time.required ? '*':''}</span></Form.Label>
    </Row>
    {/* <Form.Control
    type="time"
    placeholder={props.time.placeholder}
    aria-label="Disabled input example"
  /> */}
  <Row className="justify-content-left align-items-left">
      <Col md="auto" className="timeHeader">
        Hr
      </Col>
      <Col md="auto">
        
      </Col>
      <Col md="auto" className="timeHeader">
        Min
      </Col>
      <Col md="auto">
        
      </Col>
      <Col md="auto" className="timeHeader">
        Sec
      </Col>
    </Row>
   <Row className="justify-content-left align-items-left">
      <Col md="auto">
        <Form.Control
          type="number"
          aria-label="Hour input"
          min="0"
          max="23"
          className="time-input time"
        />
      </Col>
      <Col md="auto">
        <span>:</span>
      </Col>
      <Col md="auto">
        <Form.Control
          type="number"
          aria-label="Minute input"
          min="0"
          max="59"
          className="time-input time"
        />
      </Col>
      <Col md="auto">
        <span>:</span>
      </Col>
      <Col md="auto">
        <Form.Control
          type="number"
          aria-label="Second input"
          min="0"
          max="59"
          className="time-input time"
        />
      </Col>
    </Row>
  </Form.Group> 
   </Form>  
)

}
export default TimeComponent;