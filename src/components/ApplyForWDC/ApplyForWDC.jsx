import React from 'react'
import styles from './ApplyForWDC.module.css'
import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material';

const ApplyForWDC = () => {
    // State Variables
    const theme=useTheme();

    // Styles
    const containerStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/wdc-banner.png)`,
    }
    const buttonStyle={
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
    }

    // Local variables
    const title = "Apply for WDC today"
    const buttonText = "Check WDCs"

  return (
    <section className={styles.container} style={containerStyle}>
        <div className={styles.title}>
            {title}
        </div>
        <Link to='/wdcs'>
            <button className={styles.button} style={buttonStyle} type='button'>
                {buttonText}
            </button>
        </Link>
    </section>
  )
}

export default ApplyForWDC