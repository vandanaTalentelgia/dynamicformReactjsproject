
import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from 'react-drag-and-drop'
import { Row, Col, Container, Button,Form } from 'react-bootstrap'
import Email from "./Structure/email";
import TextArea from "./Structure/textarea";
import TextAreaComponent from "./Component/textarea";
import TextFieldComponent from "./Component/textfield";
import TextField from "./Structure/textfield";
import Select from "./Structure/select";
import SelectComponent from "./Component/select";
import Radio from "./Structure/radio";
import RadioComponent from "./Component/radio";
import Checkbox from "./Structure/checkbox";
import CheckboxComponent from "./Component/checkbox";
import EmailComponent from "./Component/email";
import Number from "./Structure/number";
import NumberComponent from "./Component/number";
import { fieldValidator } from "./validation/custom";
import Password from "./Structure/password";
import PasswordComponent from "./Component/password";
import Date from "./Structure/date";
import DateComponent from "./Component/date";
import ButtonComponent from "./Component/button";
import ButtonData from "./Structure/button";
import Time from "./Structure/time";
import TimeComponent from "./Component/time";
import File from "./Structure/file";
import FileComponent from "./Component/file";
import axios from 'axios';
import { baseURL } from './config/baseURLPath';

function FormBuilder() {
    const [dragList, setDragList] = useState([]);
    const [textArea, setTextarea] = useState({ label: 'Label', placeholder: 'Placeholder', rows: '3', required: 'true' });
    const [textField, setTextField] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [select, setSelect] = useState({ label: 'Label', options: [{ option: 'option', value: 'value' }], required: 'true' });
    const [radio, setRadio] = useState({ label: 'Label', options: [{ option: 'option', value: 'value' }], required: 'true' });
    const [checkbox, setCheckbox] = useState({ label: 'Label', options: [{ option: 'option', value: 'value' }], required: 'true' });
    const [email, setEmail] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [number, setNumber] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [password, setPassword] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [date, setDate] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [button, setButton] = useState({ label: 'Label', name: 'Submit', variant: 'primary', type: "submit", required: 'true' });
    const [time, setTime] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [file, setFile] = useState({ label: 'Label', placeholder: 'Placeholder', required: 'true' });
    const [formName,setFormName]=useState('');
    const [formData, setFormData] = useState([]);
    const [message, setMessage] = useState('');
    const onDrop = (data) => {
        // Correctly set the dragList state by spreading the existing list
        setDragList((prevList) => [...prevList, data.fields]); // Assuming data is the item you want to add
        let dataValue = [];
        if (data.fields === 'TextArea') {
            dataValue = textArea;
        } else if (data.fields === 'TextField') {
            dataValue = textField;
        }
        else if (data.fields === 'Select') {
            dataValue = select;
        }
        else if (data.fields === 'Radio') {
            dataValue = radio;
        } else if (data.fields === 'Checkbox') {
            dataValue = checkbox;
        } else if (data.fields === 'Email') {
            dataValue = email;
        } else if (data.fields === 'Number') {
            dataValue = number;
        } else if (data.fields === 'Password') {
            dataValue = password;
        } else if (data.fields === 'Date') {
            dataValue = date;
        } else if (data.fields === 'Time') {
            dataValue = time;
        } else if (data.fields === 'File') {
            dataValue = file;
        } else if (data.fields === 'Button') {
            dataValue = button;
        }
        setFormData(prevState => ({
            ...prevState,
            [data.fields]: {
                ...prevState[data.fields],
                ...dataValue,
            },
        }));
    };

    const resetData = () => {
        setDragList([]);
        setFormData([]);
    }

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...textArea,
                };
            });
            return updatedFormData;
        });
    }, [textArea, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...textField,
                };
            });
            return updatedFormData;
        });
    }, [textField, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...select,
                };
            });
            return updatedFormData;
        });
    }, [select, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...radio,
                };
            });
            return updatedFormData;
        });
    }, [radio, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...checkbox,
                };
            });
            return updatedFormData;
        });
    }, [checkbox, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...email,
                };
            });
            return updatedFormData;
        });
    }, [email, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...number,
                };
            });
            return updatedFormData;
        });
    }, [number, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...password,
                };
            });
            return updatedFormData;
        });
    }, [password, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...date,
                };
            });
            return updatedFormData;
        });
    }, [date, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...time,
                };
            });
            return updatedFormData;
        });
    }, [time, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...file,
                };
            });
            return updatedFormData;
        });
    }, [file, dragList]);

    useEffect(() => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };

            dragList.forEach(item => {
                updatedFormData[item] = {
                    ...updatedFormData[item],
                    ...button,
                };
            });
            return updatedFormData;
        });
    }, [button, dragList]);

    // Check Validation Function
    const checkValidation = (field, value, type, maxLength, minLength) => {
        return fieldValidator(field, value, type, maxLength, minLength);
    };

    const handleSave = () => {
        switch (true) {
          case formName.trim() === '' : 
          setMessage('Please Enter Name');
          break;
        default:
          axios({
            method: 'post',
            url: baseURL + '/forms',
            data: {
              name: formName.trim(),
              content: JSON.stringify(formData),
            },
          })
            .then((response) => {
                console.log(response.message);
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      };
    return (
        <Container>
            <h1>Drag & Drop</h1>
            <Row className="main">

                <Col md={2}>

                    <Draggable type="fields" data="TextField"><div className="drag">Text Field</div></Draggable>
                    <Draggable type="fields" data="TextArea"><div className="drag">Text Area</div></Draggable>
                    <Draggable type="fields" data="Select"><div className="drag">Select</div></Draggable>
                    <Draggable type="fields" data="Radio"><div className="drag">Radio Button</div></Draggable>
                    <Draggable type="fields" data="Checkbox"><div className="drag">Checkbox</div></Draggable>
                    <Draggable type="fields" data="Email"><div className="drag">Email</div></Draggable>
                    <Draggable type="fields" data="Number"><div className="drag">Number</div></Draggable>
                    <Draggable type="fields" data="Password"><div className="drag">Password</div></Draggable>
                    <Draggable type="fields" data="Date"><div className="drag">Date</div></Draggable>
                    <Draggable type="fields" data="Time"><div className="drag">Time</div></Draggable>
                    <Draggable type="fields" data="File"><div className="drag">File Uploads</div></Draggable>
                    <Draggable type="fields" data="Button"><div className="drag">Button</div></Draggable>

                </Col>
                <Col md={5}>
                    <Droppable
                        className='drop'

                        types={['fields']} // <= allowed drop types
                        onDrop={(data) => onDrop(data)}>

                        <Row className="Smoothie">
                            {dragList.map((item, index) => {
                                return (
                                    <span key={index} className="dragItem">
                                        {item === 'TextArea' ?
                                            <TextArea setTextarea={setTextarea} textArea={textArea} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'TextField' ?
                                                <TextField setTextField={setTextField} textField={textField} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Select' ?
                                                    <Select setSelect={setSelect} select={select} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Radio' ?
                                                        <Radio setRadio={setRadio} radio={radio} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Checkbox' ?
                                                            <Checkbox setCheckbox={setCheckbox} checkbox={checkbox} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Email' ?
                                                                <Email setEmail={setEmail} email={email} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Number' ?
                                                                    <Number setNumber={setNumber} number={number} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Password' ?
                                                                        <Password setPassword={setPassword} password={password} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Date' ?
                                                                            <Date setDate={setDate} date={date} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Time' ?
                                                                                <Time setTime={setTime} time={time} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'File' ?
                                                                                <File setFile={setFile} file={file} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item === 'Button' ?
                                                                                    <ButtonData setButton={setButton} button={button} formData={formData} setFormData={setFormData} dragList={dragList} setDragList={setDragList} /> : item}
                                    </span>
                                );


                            })}
                        </Row>
                    </Droppable>
                    <Button onClick={() => resetData()} className="button">Clear</Button>
                </Col>
                <Col md={4}>
                {message && (
                  <div className='form-group'>
                    <div
                      className='alert alert-danger alert-dismissible'
                      role='alert'
                    >
                      {message}
                    </div>
                  </div>
                )}
                <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextField1">
                            <Form.Label  style={{float:'left'}}>Form Name<span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control
                            type="text"
                            placeholder='Enter Form Name'
                            aria-label="Disabled input example"
                            value={formName}
                            onChange={(e)=>setFormName(e.target.value)}
                        />
                        </Form.Group> 
                        </Form>  
                    {formData && Object.entries(formData).map(([key, value]) => {
                        return (
                            key === 'TextArea' ?
                                <TextAreaComponent textArea={textArea} />
                                : key === 'TextField' ?
                                    <TextFieldComponent textField={textField} /> : key === 'Select' ?
                                        <SelectComponent select={select} /> : key === 'Radio' ?
                                            <RadioComponent radio={radio} /> : key === 'Checkbox' ?
                                                <CheckboxComponent checkbox={checkbox} /> : key === 'Email' ?
                                                    <EmailComponent email={email} checkValidation={checkValidation} /> : key === 'Number' ?
                                                        <NumberComponent number={number} checkValidation={checkValidation} /> : key === 'Password' ?
                                                            <PasswordComponent password={password} checkValidation={checkValidation} /> : key === 'Date' ?
                                                                <DateComponent date={date} checkValidation={checkValidation} /> : key === 'Time' ?
                                                                    <TimeComponent time={time} checkValidation={checkValidation} /> :key === 'File' ?
                                                                    <FileComponent file={file}  /> : key === 'Button' ?
                                                                        <ButtonComponent button={button} handleSave={handleSave}/> : value
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default FormBuilder;
