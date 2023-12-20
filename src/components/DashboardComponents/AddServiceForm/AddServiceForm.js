import React, { useState } from 'react';

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AddServiceForm = () => {

    const { currentUser } = useSelector(state => state.user)
    console.log(currentUser, "Here is the user");

    const navigate = useNavigate();
 
    const [serviceName, setserviceName] = useState("")
    const [serviceCategory, setserviceCategory] = useState("")
    const [serviceDescription, setserviceDescription] = useState("")
    const [servicePrice, setservicePrice] = useState();
    const [serviceMinQuantity, setserviceMinQuantity] = useState();
    const [serviceTotalQuantity, setserviceTotalQuantity] = useState();

    const [formResponse, setformResponse] = useState(null)

    const submitForm = (event)=>{
        event.preventDefault();

        const data = {
            serviceName, serviceCategory, serviceDescription, servicePrice, serviceMinQuantity, serviceTotalQuantity
        }
        console.log(data, "This is the submitted form");

        axios.post(`${process.env.REACT_APP_API_URL}/api/service`, {
            serviceName, serviceCategory, serviceDescription, servicePrice, serviceMinQuantity, serviceTotalQuantity,
            user_id: currentUser._id,
            phoneNumber: currentUser.phoneNumber,
            userDetails: currentUser
        })
            .then(res=>{
                console.log(res.data);
                toast("Service Creation Succesfull");
                setTimeout(() => {
                    navigate(`/checkout/${res.data._id}`)
                }, 3000);
                // setformResponse(res.data);
                
            })
            .catch(err=>{
                console.log("There is an errror");
            })

    }

    return (
        <div className='p-6'>
            {
                formResponse ? (<div>{JSON.stringify(formResponse)}</div>) : (<Form onSubmit={submitForm}>

                    <FloatingLabel  controlId="floatingPassword" label="Service Name" className='mb-3'>
                        <Form.Control value={serviceName} required onChange={(event)=>setserviceName(event.target.value)} type="text" placeholder="Service Name" />
                    </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label="Service Category" className='mb-3'>
                        <Form.Control value={serviceCategory} required onChange={(event)=>setserviceCategory(event.target.value)} type="text" placeholder="Service Category" />
                    </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label="Service Description" className='mb-3'>
                        <Form.Control value={serviceDescription} required onChange={(event)=>setserviceDescription(event.target.value)} type="text" placeholder="Service Description" />
                    </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label="Price" className='mb-3'>
                        <Form.Control value={servicePrice} required onChange={(event)=>setservicePrice(event.target.value)} type="number" placeholder="Service Price" />
                    </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label="Minimum Quantity to Order" className='mb-3'>
                        <Form.Control value={serviceMinQuantity} required onChange={(event)=>setserviceMinQuantity(event.target.value)} type="number" placeholder="Minimum Quantity to Order" />
                    </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label="Total Quantity In Stock" className='mb-3'>
                        <Form.Control value={serviceTotalQuantity} required onChange={(event)=>setserviceTotalQuantity(event.target.value)} type="number" placeholder="Total Quantity In Stock" />
                    </FloatingLabel>
                    <Button type='submit'>Submit</Button>
                </Form>)
            }
            
            <ToastContainer style={{ zIndex: 12}} />
        </div>
  )
}

export default AddServiceForm