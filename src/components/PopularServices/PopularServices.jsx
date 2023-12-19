import React,{useState,useEffect} from 'react'
import styles from './PopularServices.module.css'
import { useTheme } from '@mui/material'
import PopularServiceCard from '../PopularServiceCard/PopularServiceCard'

const popularServices=[
    {
        name: "Service 1",
        location: "Location 1",
        image: "https://picsum.photos/200/300",
        description: "Description 1",
        price: 100
    },
    {
        name: "Service 2",
        location: "Location 2",
        image: "https://picsum.photos/200/300",
        description: "Description 2",
        price: 100
    },
    {
        name: "Service 3",
        location: "Location 3",
        image: "https://picsum.photos/200/300",
        description: "Description 3",
        price: 100
    },
    {
        name: "Service 3",
        location: "Location 3",
        image: "https://picsum.photos/200/300",
        description: "Description 3",
        price: 100
    },
    {
        name: "Service 3",
        location: "Location 3",
        image: "https://picsum.photos/200/300",
        description: "Description 3",
        price: 100
    },
    {
        name: "Service 3",
        location: "Location 3",
        image: "https://picsum.photos/200/300",
        description: "Description 3",
        price: 100
    },
    {
        name: "Service 3",
        location: "Location 3",
        image: "https://picsum.photos/200/300",
        description: "Description 3",
        price: 100
    },
]

const PopularServices = () => {
    // State variables
    const theme = useTheme()
    const [services,setServices]=useState([]);

      // Local Variables
  const servicesLimit=9;

    // Styles
    const headerSubTitleStyle = {
        color: theme.palette.secondary.main,
    }
    const headerTitleStyle = {
        color: theme.palette.text.primary,
    }

    // Sideeffects
    useEffect(()=>{
        const url=`http://localhost:5000/api/service/get-all-services/${servicesLimit}`;
        const fetchServices=async()=>{
            const response=await fetch(url);
            const data=await response.json();
            console.log('Popular Services: ',data);
            setServices(data);
        }
        fetchServices();
    },[])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.backgroundText}>Agricultural</div>
            <div className={styles.headerSubTitle} style={headerSubTitleStyle} >Most Popular</div>
            <div className={styles.headerTitle} style={headerTitleStyle}>FPO Services</div>
        </div>
        <div className={styles.dataContainer}>
            {
                services.map((service, index) => {
                    return <PopularServiceCard key={index} service={service} />
                })
            }
        </div>
    </div>
  )
}

export default PopularServices