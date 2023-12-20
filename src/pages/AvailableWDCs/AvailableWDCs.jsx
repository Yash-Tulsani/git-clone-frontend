import React, {useState,useEffect} from 'react'
import JoinWDCModal from '../../components/JoinWDCModal/JoinWDCModal'
import styles from './AvailableWDCs.module.css'

const AvailableWDCs = () => {
  // States
  const [wdcs,setWDCs]=useState([])

  // Effects
  useEffect(()=>{
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
    <section className={styles.container}>
        <JoinWDCModal/>
        <h1>Testing...</h1>
    </section>
  )
}

export default AvailableWDCs