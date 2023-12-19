import React, { useEffect, useState } from 'react';

import { CChart } from "@coreui/react-chartjs";
import axios from "axios";

const TestGraph = () => {

    const [graphData, setgraphData] = useState(null);

    useEffect(() => {
      
        axios.get(`${process.env.REACT_APP_API_URL}/api/charts/yearChart/2023`)
        // axios.get(`${process.env.REACT_APP_API_URL}/api/charts/districtChart/${"Tamil Nadu"}/2023`)
        // axios.get(`${process.env.REACT_APP_API_URL}/api/charts/stateChart/2023`)
            .then((res)=>{
                console.log(res.data, "Chart API");
                setgraphData(res.data)
            })
            .catch(err=>{
                console.log(err);
            })
      
    }, [])
    

  return (
    <div className='w-[50%]'>
        {graphData ? (
            <CChart
                type="bar"
                data={{...graphData}}
           
          />
        ) : (<div>Loading</div>)}
    </div>
  )
}

export default TestGraph