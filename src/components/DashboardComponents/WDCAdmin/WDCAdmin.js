import React, { useEffect, useState } from 'react';
import {Accordion, Form} from 'react-bootstrap';
import axios from 'axios';

const WDCAdmin = () => {

    const [data, setData] = useState(null);
    const [selectedWdc, setSelectedWdc] = useState(0);

    console.log(selectedWdc, "This is the selected WDC");

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/wdc`)
            .then(res=>{
                console.log(res.data);
                setData(res.data);
                
            })
            .catch(err=>{
                console.log("There is an errror");
            })

    }, [])
    

  return (
    <div className='p-6'>

        {
            data==null ? (<div>Loading...</div>) : (
                <div>
                    <div className='mb-3'>
                    Pick WDC:
                    <Form.Select value={selectedWdc} onChange={(event)=>setSelectedWdc(event.target.value)} aria-label="Default select example" className='mb-3'>
                        {data.list.map((elm, ind)=>{
                            return <option value={ind}>{elm.name}</option>
                        })}
                    </Form.Select>
                </div>
                
                <div>
                    <div>Handled by: {data.list[selectedWdc].FPO_name}</div>
                    <div>Percentage Invested by Public: {data.list[selectedWdc].percentageOccupied}</div>
                </div>
                
                <Accordion defaultActiveKey="0">
                {
                    data.members[selectedWdc].map((elm, index)=>{
                        return (
                            <Accordion.Item eventKey={`${index}`}>
                            <Accordion.Header>{`${elm.name} (${elm.percentageStake}%)`}</Accordion.Header>
                            <Accordion.Body>
                                <div>Total Invested Amount: {elm.investedAmount}</div>
                                <div>Total Stake in WDC: {elm.percentageStake}</div>
                                <div>Total Income from FPO: {elm.totalFPOIncome}</div>
                            </Accordion.Body>
                        </Accordion.Item>
                        )
                        
                    })
                }
                </Accordion>
                </div>
                
            )
        }

        
    </div>
  )
}

export default WDCAdmin