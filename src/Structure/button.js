import React from "react";
import { CloseButton,Card,Form } from 'react-bootstrap'
function ButtonData (props) {
  const handleChangeName =(e)=>{
    props.setButton(prevState => ({
      ...prevState,name: e.target.value}));
    }
    const handleChangeVariant =(e)=>{
      props.setButton(prevState => ({
        ...prevState,variant: e.target.value}));
      }
      const handleChangeType =(e)=>{
        props.setButton(prevState => ({
          ...prevState,type: e.target.value}));
        }
  const handleCancel = () => {
    props.setFormData((prevFormData) => {
      // Create a copy of the previous formData
      const upButtondFormData = { ...prevFormData };
  
      // Iterate through dragList and remove the corresponding key from formData and dragList
      props.dragList.forEach((item, index) => {
        if (item in upButtondFormData) {
          delete upButtondFormData[item];
        }
  
        // Remove the item from dragList
        if (item === 'Button') {
          props.setDragList((prevDragList) => {
            const upButtondDragList = [...prevDragList];
            upButtondDragList.splice(index, 1); // Remove the item at the current index
            return upButtondDragList;
          });
        }
      });
      return upButtondFormData;
    });
  };
    return (
        
        <Card>
          {console.log(props.button)}
        <Card.Body>
          <Card.Title className="cardTitle"> <CloseButton onClick={()=>handleCancel()} /></Card.Title>
          <Card.Text>
          <Form.Control type="text" placeholder="Enter Placeholder" className="formControl" value={props.button.name} onChange={(e)=>handleChangeName(e)}/>
          <Form.Control type="text" placeholder="Enter Placeholder" className="formControl" value={props.button.variant} onChange={(e)=>handleChangeVariant(e)}/>
          <Form.Control type="text" placeholder="Enter Placeholder" className="formControl" value={props.button.type} onChange={(e)=>handleChangeType(e)}/>
          </Card.Text>
        </Card.Body>
      </Card>                                  
    )

}
export default ButtonData;