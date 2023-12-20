import React,{useState,useEffect} from 'react'
import styles from './AvailableWDCs.module.css'
import { useTheme } from '@mui/material'
import AvailableWDCsCard from '../../components/AvailableWDCsCard/AvaliableWDCsCard'

const AvailableWDCs = () => {
    // State variables
    const theme = useTheme()
    const [wdcs, setWdcs] = useState([])
      // Local Variables

    // Styles
    const headerSubTitleStyle = {
        color: theme.palette.secondary.main,
    }
    const headerTitleStyle = {
        color: theme.palette.text.primary,
    }

    // Sideeffects
    useEffect(()=>{
        const url=`${process.env.REACT_APP_API_URL}/api/wdc/get-all-wdcs`;
        const fetchServices=async()=>{
            try{
                const response=await fetch(url);
                const data=await response.json();
                console.log('Popular Services: ',data);
                setWdcs(data);
            }
            catch(e){
                console.log(e);
            }
        }
        fetchServices();
    },[])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.backgroundText}>Agricultural</div>
            <div className={styles.headerTitle} style={headerTitleStyle}>WDC</div>
        </div>
        <div className={styles.dataContainer}>
            {
                wdcs.map((wdc, index) => {
                    return <AvailableWDCsCard key={index} index={index} wdc={wdc} />
                })
            }
        </div>
    </div>
  )
}

export default AvailableWDCs