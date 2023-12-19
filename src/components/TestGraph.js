import React, { useEffect, useState } from 'react';

import { CChart } from "@coreui/react-chartjs";
import axios from "axios";
import { Button, ButtonGroup } from '@mui/material';


const TestGraph = () => {

    const [graphData, setgraphData] = useState(null);
    const urls = [`${process.env.REACT_APP_API_URL}/api/charts/yearChart/2023`,
        `${process.env.REACT_APP_API_URL}/api/charts/districtChart/${"Tamil Nadu"}/2023`,
        `${process.env.REACT_APP_API_URL}/api/charts/stateChart/2023`
    ]

    const [graphIndex, setGraphIndex] = useState(0); 

    useEffect(() => {

        axios.get(urls[graphIndex])
            .then((res) => {
                console.log(res.data, "Chart API");
                setgraphData(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, [graphIndex])


    return (
        <div className='flex flex-col items-center mt-3'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={(event) => setGraphIndex(0)} >Monthly Performance</Button>
                <Button onClick={(event) => setGraphIndex(1)} >District Performance</Button>
                <Button onClick={(event) => setGraphIndex(2)} >State Performance Chart</Button>
                {/* <Button onClick={(event)=>setTab("fpo")}>FPO</Button> */}
            </ButtonGroup>
            <div className='w-[600px]'>
                {graphData ? (
                    <CChart
                        type="bar"
                        data={{ ...graphData }}

                    />
                ) : (<div>Loading</div>)}
            </div>

            
        </div>
    )
}

export default TestGraph