import React, {useState} from 'react'

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";


export const WdcCreationForm = () => {

    const [wdcName, setWdcName] = useState("");
    const [wdcAddress, setAddress] = useState("");
    const [wdcDistrict, setWdcDistrict] = useState("");
    const [wdcState, setWdcState] = useState("Andhra Pradesh");
    const [wdcStatus, setWdcStatus] = useState("Pending Approval");
    const [wdcEmail, setWdcEmail] = useState("");
    const [wdcPhone, setWdcPhone] = useState("");
    const [wdcPublicInvestment, setWdcPublicInvestment] = useState(0);
    const [wdcDescription, setWdcDescription] = useState("");

    const [formResponse, setformResponse] = useState(null)

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
        'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
        'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
        'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'
      ];

      const navigate = useNavigate();

    const onSubmitForm = (event)=>{
        event.preventDefault();

        console.log(wdcName, wdcAddress, wdcDistrict, wdcStatus, wdcState, "Yesss");

        axios.post(`${process.env.REACT_APP_API_URL}/api/wdc`, {
            wdcName, wdcAddress, wdcDistrict, wdcStatus, wdcState, wdcEmail, wdcPhone, wdcDescription, wdcPublicInvestment
        })
            .then(res=>{
                console.log(res.data);
                toast("WDC Created! Redirecting you to WDC Listing Page")
                setTimeout(() => {
                    
                    navigate("/wdcs")
                }, 4000);
                
                // setformResponse(res.data)
                
            })
            .catch(err=>{
                console.log("There is an errror");
            })
          
    }

    return (
        <div className='p-6'>
            {formResponse ? (<div>{JSON.stringify(formResponse)}</div>) : (<Form onSubmit={onSubmitForm}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="WDC Name"
                    className="mb-3"
                >
                    <Form.Control value={wdcName} required onChange={(event)=>setWdcName(event.target.value)} type="text" placeholder="Your WDC Project Name" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Email" className='mb-3'>
                    <Form.Control value={wdcEmail} required onChange={(event)=>setWdcEmail(event.target.value)} type="text" placeholder="WDC Email" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Phone Number" className='mb-3'>
                    <Form.Control value={wdcPhone} required onChange={(event)=>setWdcPhone(event.target.value)} type="number" placeholder="Phone Number" />
                </FloatingLabel>
                <FloatingLabel  controlId="floatingPassword" label="Address" className='mb-3'>
                    <Form.Control value={wdcAddress} required onChange={(event)=>setAddress(event.target.value)} type="text" placeholder="Address" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="District" className='mb-3'>
                    <Form.Control value={wdcDistrict} required onChange={(event)=>setWdcDistrict(event.target.value)} type="text" placeholder="District" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Public Investment" className='mb-3'>
                    <Form.Control required value={wdcPublicInvestment} onChange={(event)=>setWdcPublicInvestment(event.target.value)} type="number" placeholder="Public Investment" />
                </FloatingLabel>
                <div className='mb-3'>
                    State:
                    <Form.Select value={wdcState} required onChange={(event)=>setWdcState(event.target.value)} aria-label="Default select example" className='mb-3'>
                        {indianStates.map(elm=>{
                            return <option value={elm}>{elm}</option>
                        })}
                    </Form.Select>
                </div>
         
                <div className='mb-3'>
                    Status:
                    <Form.Select value={wdcStatus} required onChange={(event)=>setWdcStatus(event.target.value)} aria-label="Default select example" className='mb-3'>
                        <option value="Pending Approval">Pending Approval</option>
                        <option value="Planning Stage">Planning Stage</option>
                        <option value="Construction Completed">Construction Completed</option>
            
                    </Form.Select>
                </div>
                {/* <div className="mb-3">
                    <div className="input-group flex flex-col">
                        <div>WDC Description and Purpose</div>
                        <textarea
                            className="border-2"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            onChange={(event)=>setWdcDescription(event.target.value)}
                        >{wdcDescription}</textarea>
                    </div>
                </div> */}
                <Button type='submit'>Submit Here</Button>
                
            </Form>)}
            
            <ToastContainer style={{ zIndex: 12}} />
     
        </div>
    )
}
