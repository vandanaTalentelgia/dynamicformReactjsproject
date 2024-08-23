import React from "react";
import { CloseButton,Card,Form } from 'react-bootstrap'
function File(props) {
  const handleChangeLabel =(e)=>{
    props.setFile(prevState => ({
      ...prevState,
      label: e.target.value
    }));
  }
  // const handleChangePlaceholder =(e)=>{
  //   props.setFile(prevState => ({
  //     ...prevState,placeholder: e.target.value}));
  //   }
  const handleChangeRequired =(e)=>{
    props.setFile(prevState => ({
      ...prevState,required: e.target.checked}));
  }
  const handleCancel = () => {
    props.setFormData((prevFormData) => {
      // Create a copy of the previous formData
      const upFiledFormData = { ...prevFormData };
  
      // Iterate through dragList and remove the corresponding key from formData and dragList
      props.dragList.forEach((item, index) => {
        if (item in upFiledFormData) {
          delete upFiledFormData[item];
        }
  
        // Remove the item from dragList
        if (item === 'File') {
          props.setDragList((prevDragList) => {
            const upFiledDragList = [...prevDragList];
            upFiledDragList.splice(index, 1); // Remove the item at the current index
            return upFiledDragList;
          });
        }
      });
      return upFiledFormData;
    });
  };
    return (
        
        <Card>
        <Card.Body>
          <Card.Title className="cardTitle"> <CloseButton onClick={()=>handleCancel()} /></Card.Title>
          <Card.Text>
          <Form.Control type="text" placeholder="Enter Label" className="formControl" value={props.file.label} onChange={(e)=>handleChangeLabel(e)}/>
          {/* <Form.Control type="text" placeholder="Enter Placeholder" className="formControl" value={props.file.placeholder} onChange={(e)=>handleChangePlaceholder(e)}/> */}
          <Form.Check
            type='checkbox'
            id="default-checkbox"
            label="Required"
            className="required"
            checked={props.file.required}
            onChange={(e)=>handleChangeRequired(e)}
          />
          </Card.Text>
        </Card.Body>
      </Card>                                  
    )

}
export default File;