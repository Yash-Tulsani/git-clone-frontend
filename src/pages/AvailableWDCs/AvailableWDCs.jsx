import React, {useState,useEffect} from 'react'

const AvailableWDCs = () => {
  // States
  const [wdcs,setWDCs]=useState([])

  // Effects
  useEffect(()=>{
    // fetch(`${process.env.REACT_APP_API_URL}/api/wdc/get-all-wdcs`)
    async function fetchData(){
      console.log('Fetching data from API....')
      const response=await fetch(`${process.env.REACT_APP_API_URL}/api/wdc/get-all-wdcs`)
      const data=await response.json()
      console.log(data)
      setWDCs(data)
    }
    fetchData()
  },[])
  return (
    <section className={StyleSheet.container}>

    </section>
  )
}

export default AvailableWDCs