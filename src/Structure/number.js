import React from "react";
import { CloseButton,Card,Form } from 'react-bootstrap'
function Number(props) {
  const handleChangeLabel =(e)=>{
    props.setNumber(prevState => ({
      ...prevState,
      label: e.target.value
    }));
  }
  const handleChangePlaceholder =(e)=>{
    props.setNumber(prevState => ({
      ...prevState,placeholder: e.target.value}));
    }
  const handleChangeRequired =(e)=>{
    props.setNumber(prevState => ({
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
        if (item === 'Number') {
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
    return (
        
        <Card>
        <Card.Body>
          <Card.Title className="cardTitle"> <CloseButton onClick={()=>handleCancel()} /></Card.Title>
          <Card.Text>
          <Form.Control type="text" placeholder="Enter Label" className="formControl" value={props.number.label} onChange={(e)=>handleChangeLabel(e)}/>
          <Form.Control type="text" placeholder="Enter Placeholder" className="formControl" value={props.number.placeholder} onChange={(e)=>handleChangePlaceholder(e)}/>
          <Form.Check
            type='checkbox'
            id="default-checkbox"
            label="Required"
            className="required"
            checked={props.number.required}
            onChange={(e)=>handleChangeRequired(e)}
          />
          </Card.Text>
        </Card.Body>
      </Card>                                  
    )

}
export default Number;