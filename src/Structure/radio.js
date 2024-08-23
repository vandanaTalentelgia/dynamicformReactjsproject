import React from "react";
import { CloseButton,Card,Form ,Row,Col} from 'react-bootstrap'
function Radio(props) {
  const handleChangeLabel =(e)=>{
    props.setRadio(prevState => ({
      ...prevState,
      label: e.target.value
    }));
  }
  const handleChangeRequired =(e)=>{
    props.setRadio(prevState => ({
      ...prevState,required: e.target.checked}));
  }
  const handleCancel = () => {
    props.setFormData((prevFormData) => {
      // Create a copy of the previous formData
      const updatedFormData = { ...prevFormData };
  
      // Iterate through dragList and remove the corresponding key from formData and dragList
      props.dragList.forEach((item, index) => {
        if (item in updatedFormData) {
          delete updatedFormData[item];
        }
  
        // Remove the item from dragList
        if (item === 'Radio') {
          props.setDragList((prevDragList) => {
            const updatedDragList = [...prevDragList];
            updatedDragList.splice(index, 1); // Remove the item at the current index
            return updatedDragList;
          });
        }
      });
      return updatedFormData;
    });
  };
  const addRadioFields = () => {
    props.setRadio(prevState => ({
      ...prevState,
      options: [
        ...prevState.options,
        { option: 'option', value: 'value' } // Adding a new empty option and value
      ]
    }));
  };
  const removeRadioFields = (index) => {
    props.setRadio(prevState => ({
      ...prevState,
      options: prevState.options.filter((_, i) => i !== index)
    }));
  };
  const handleOptions = (e, index) => {
    const { name, value } = e.target;
  
    props.setRadio(prevState => ({
      ...prevState,
      options: prevState.options.map((option, i) =>
        i === index ? { ...option, [name]: value } : option
      )
    }));
  };
    return (
        
        <Card>
        <Card.Body>
          <Card.Title className="cardTitle"> <CloseButton onClick={()=>handleCancel()} /></Card.Title>
          <Card.Text>
          <Form.Control type="text" placeholder="Enter Label" className="formControl" value={props.radio.label} onChange={(e)=>handleChangeLabel(e)}/>
          <Row className="formControl"  style={{display:'flex'}}>
          {props.radio.options
  .filter(option => option.option !== '' && option.value !== '')
  .map((d, index) =>(
    <div key={index} className="mb-3">
    <Form.Check type='radio' aria-label="Default Radio example" label={d.option} value={d.value} style={{float:'inline-start'}}>
      </Form.Check>
     </div>
  ))}
        </Row>
       {props.radio.options.map((d, index) => (
        
        <Row className="formControl" key={index}>
      <Col md={5} style={{paddingLeft:'0px'}}>
      <Form.Control
        type="text"
        value={d.option}
        aria-label="Disabled input example"
        name="option"
        onChange={(e)=> handleOptions(e,index)}
      />
      </Col>
      <Col md={5}>
      <Form.Control
        type="text"
        value={d.value}
        name="value"
        aria-label="Disabled input example"
        onChange={(e)=> handleOptions(e,index)}
      />
      </Col>
      <Col md={2}>
        {index === props.radio.options.length - 1 ? (  <div className="form-group d-flex col-lg-1 col-md-1 col-1 ">
                  <button
                    type="button"
                    onClick={()=>addRadioFields()}
                    className="btn-default btn-primary add-icon "
                  >
                   <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                  </div>): (  
                  <div className="form-group d-flex col-lg-1 col-md-1 col-1 ">
                  <button
                    type="button"
                    onClick={()=>removeRadioFields(index)}
                    className="btn-default btn-primary add-icon "
                  >
                   <i class="fa fa-remove"></i>
                  </button>
                  </div>
                  )
                  }
    
      </Col>
      </Row>
       ))}
          <Form.Check
            type='checkbox'
            id="default-checkbox"
            label="Required"
            className="required"
            checked={props.radio.required}
            onChange={(e)=>handleChangeRequired(e)}
          />
          </Card.Text>
        </Card.Body>
      </Card>                                  
    )

}
export default Radio;