import React from "react";
import { CloseButton,Card,Form } from 'react-bootstrap'
function Time(props) {
  const handleChangeLabel =(e)=>{
    props.setTime(prevState => ({
      ...prevState,
      label: e.target.value
    }));
  }
  // const handleChangePlaceholder =(e)=>{
  //   props.setTime(prevState => ({
  //     ...prevState,placeholder: e.target.value}));
  //   }
  const handleChangeRequired =(e)=>{
    props.setTime(prevState => ({
      ...prevState,required: e.target.checked}));
  }
  const handleCancel = () => {
    props.setFormData((prevFormData) => {
      // Create a copy of the previous formData
      const upTimedFormData = { ...prevFormData };
  
      // Iterate through dragList and remove the corresponding key from formData and dragList
      props.dragList.forEach((item, index) => {
        if (item in upTimedFormData) {
          delete upTimedFormData[item];
        }
  
        // Remove the item from dragList
        if (item === 'Time') {
          props.setDragList((prevDragList) => {
            const upTimedDragList = [...prevDragList];
            upTimedDragList.splice(index, 1); // Remove the item at the current index
            return upTimedDragList;
          });
        }
      });
      return upTimedFormData;
    });
  };
    return (
        
        <Card>
        <Card.Body>
          <Card.Title className="cardTitle"> <CloseButton onClick={()=>handleCancel()} /></Card.Title>
          <Card.Text>
          <Form.Control type="text" placeholder="Enter Label" className="formControl" value={props.time.label} onChange={(e)=>handleChangeLabel(e)}/>
          {/* <Form.Control type="text" placeholder="Enter Placeholder" className="formControl" value={props.time.placeholder} onChange={(e)=>handleChangePlaceholder(e)}/> */}
          <Form.Check
            type='checkbox'
            id="default-checkbox"
            label="Required"
            className="required"
            checked={props.time.required}
            onChange={(e)=>handleChangeRequired(e)}
          />
          </Card.Text>
        </Card.Body>
      </Card>                                  
    )

}
export default Time;