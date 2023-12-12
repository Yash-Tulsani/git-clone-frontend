import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { useTheme } from '@mui/material'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Select from 'react-select';

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
]

const languageOptions=[
    {value:"english",label:"English"}

]


const Navbar = () => {
    // State Variables
    const theme = useTheme();
    const [language, setLanguage] = React.useState('');

    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    // Event Handlers
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    // Styles
    const languageSelectStyle={
        control: (provided, state) => ({
            ...provided,
            minWidth: "175px",
        }),
    }

    const buttonStyle={
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.primary.main,
    }

  return (
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
        <div className={styles.navbarButtonsContainer}>
            <Button variant="contained" style={buttonStyle}>
                Login
            </Button>
            <Select
                className={styles.languageSelect}
                classNamePrefix="select"
                isDisabled={isDisabled}
                isSearchable={isSearchable}
                name="language"
                options={languageOptions}
                styles={languageSelectStyle}
                placeholder="Select Language"
            />
        </div>
    </div>
  )
}

export default Navbar