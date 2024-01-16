import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.css'
import { useTheme } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import useMediaQuery from '@mui/material/useMediaQuery';
import GoogleTranslate from '../GoogleTranslate/GoogleTranslate'
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/user/userSlice';

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
        name:"FAQ",
        link:"/faq"
    },
    {
        name:"WDC",
        link:"/wdcs"
    },
]

const Navbar = () => {

    const dispatch = useDispatch();

    const { currentUser } = useSelector(state => state.user);
    // State Variables
    const theme = useTheme();
    const matched768px=useMediaQuery('(max-width:768px)')
    const matched600px=useMediaQuery('(max-width:600px)');
    const matched1024px=useMediaQuery('(max-width:1024px)');


    // Styles
    const buttonStyle={
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.primary.main,
        fontSize: "0.9rem",
        [theme.breakpoints.down('md')]:{
            fontSize: "0.75rem",
        }
    }

    const navigate = useNavigate();

    let loginButtonSize="medium";

    if(matched1024px){
        buttonStyle.fontSize="0.8rem";
        loginButtonSize="small";
    }
    if(matched768px){
        buttonStyle.fontSize="0.75rem";
        loginButtonSize="small";
    }
    if(matched600px){
        buttonStyle.fontSize="0.6rem";
        loginButtonSize="small";
    }

    const handleSignOut = async () => {
        try {
          await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signout`);
          
          dispatch(signOut())
          navigate("/");
        } catch (error) {
          console.log(error);
        }
    };

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
            !matched768px &&
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
            {
                !matched768px &&
                <>
                {
                    currentUser ? (
                        <Link to={"/dashboard"}>
                            <img src={currentUser.profilePicture} alt="profile" className='h-9 w-9 rounded-full object-cover' />
                        </Link>
                    ) : (
                        (
                            <Link to={"/signin"}>
                                <Button variant="contained" size={loginButtonSize} style={buttonStyle}>
                                    Login
                                </Button>
                            </Link>
                            )
                    )
                }
                    </>
                }
                {currentUser && <Button onClick={handleSignOut} variant="contained" size={loginButtonSize} style={buttonStyle}>
                    Logout
                </Button>
                }
            <GoogleTranslate/>
        </div>
        {
            matched768px &&
            <HamburgerMenu/>
        }
        </div>
    </div>
  )
}

export default Navbar