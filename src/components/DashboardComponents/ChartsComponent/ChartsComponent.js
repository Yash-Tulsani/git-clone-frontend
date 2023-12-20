import React, { useEffect, useState } from 'react';

import { CChart } from "@coreui/react-chartjs";
import { Button, ButtonGroup } from '@mui/material';

import { Form, FloatingLabel } from 'react-bootstrap';

import axios from "axios";

const ChartsComponent = () => {

    const [graphData, setgraphData] = useState(null);
    const [year, setYear] = useState(2023);
    const [state, setState] = useState("Tamil Nadu");

    const urls = [`${process.env.REACT_APP_API_URL}/api/charts/yearChart/${year}`,
        `${process.env.REACT_APP_API_URL}/api/charts/districtChart/${state}/${year}`,
        `${process.env.REACT_APP_API_URL}/api/charts/stateChart/${year}`
    ]
    const [graphIndex, setGraphIndex] = useState(0); 
    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
        'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
        'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
        'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'
      ];

      const years = [
        "2023", 
        "2022", 
        "2021"
      ]

    useEffect(() => {

        axios.get(urls[graphIndex])
            .then((res) => {
                console.log(res.data, "Chart API");
                setgraphData(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, [graphIndex, year, state])

  return (
    <div className='p-6'>
        <div className='flex flex-col items-center mt-8'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={(event) => setGraphIndex(0)} >Monthly Performance</Button>
                <Button onClick={(event) => setGraphIndex(1)} >District Performance</Button>
                <Button onClick={(event) => setGraphIndex(2)} >State Performance Chart</Button>
                {/* <Button onClick={(event)=>setTab("fpo")}>FPO</Button> */}
            </ButtonGroup>
            <div className='w-[800px] mt-10'>
                {graphData ? (
                    <CChart
                        type="bar"
                        data={{ ...graphData }}

                    />
                ) : (<div>Loading</div>)}

                {

                }
            </div>

            <div className='mb-3'>
                {
                    graphIndex==1 && 
                    <>
                        State:
                        <Form.Select value={state} required onChange={(event)=>setState(event.target.value)} aria-label="Default select example" className='mb-3'>
                            {indianStates.map(elm=>{
                                return <option value={elm}>{elm}</option>
                            })}
                        </Form.Select>
                    </>
                }
                {
                    graphIndex!=1 && 
                    <>
                        Year:
                        <Form.Select value={year} required onChange={(event)=>setYear(event.target.value)} aria-label="Default select example" className='mb-3'>
                            {years.map(elm=>{
                                return <option value={elm}>{elm}</option>
                            })}
                        </Form.Select>
                    </>
                }
                    
            </div>



            
        </div>
    </div>
  )
}

export default ChartsComponent