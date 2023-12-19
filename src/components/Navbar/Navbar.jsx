import React, {useState,useEffect} from 'react'
import styles from './Navbar.module.css'
import { useTheme } from '@mui/material'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Select from 'react-select';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import useMediaQuery from '@mui/material/useMediaQuery';
import GoogleTranslate from '../GoogleTranslate/GoogleTranslate'

const logos=[
    "Ministry_of_Rural_Development.png",
    "Azadi-Ka-Amrit-Mahotsav-Logo.png",
    "G20_India_2023_logo.png",
    "SIH-logo.png",
]

const navLinks=[
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about"
    },
    {
        name:"Services",
        link:"/services"
    },
    {
        name:"Contact",
        link:"/contact"
    },
    {
        name:"Status",
        link:"/status"
    },
    {
        name:"FPO",
        link:"/fpo"
    },
]

const Navbar = () => {
    // State Variables
    const theme = useTheme();
    const matches768px=useMediaQuery('(max-width:768px)')


    // Styles
    const buttonStyle={
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.primary.main,
        fontSize: "0.9rem",
        [theme.breakpoints.down('md')]:{
            fontSize: "0.75rem",
        }
    }

  return (
    <div style={{backgroundColor:theme.palette.primary.main}} className={styles.box}>
        <div className={styles.navbarContainer} style={{backgroundColor:theme.palette.primary.main}}>
        <div className={styles.logoContainer}>
            {
                logos.map((logo,index)=>(
                    <div key={index} className={styles.logoGroup}>
                        <img src={`/images/${logo}`} className={styles.logo} alt="logo" />
                    </div>
                ))
            }
        </div>
        {
            !matches768px &&
            <div className={styles.navbarLinks}>
                {
                    navLinks.map((navLink,index)=>(
                        <div key={index} className={styles.navLink}>
                            <Link to={navLink.link} className={styles.navLinkText}>
                                {navLink.name}
                            </Link>
                        </div>
                    ))  
                }
            </div> 
        }
        
        <div className={styles.navbarButtonsContainer}>
            <Button variant="contained" style={buttonStyle}>
                Login
            </Button>
            <GoogleTranslate/>
        </div>
        {
            matches768px &&
            <HamburgerMenu/>
        }
        </div>
    </div>
  )
}

export default Navbar