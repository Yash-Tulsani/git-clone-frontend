import React, {useEffect, useState} from 'react'

import axios from "axios";

const OverallAnalysis = () => {

    const [year, setYear] = useState(2023);

    useEffect(() => {
        
        axios.get("/")

      
    }, [])
    

  return (
    <div className='p-4'>
        This is the overall analysis of the FPOs


    </div>
  )
}

export default OverallAnalysis