import React from 'react'
import {Link} from 'react-router-dom'
import styles from './AboutSection.module.css'
import { useTheme } from '@mui/system'
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


// Local variables
const subheading='• Who are We'
const heading='We are FPO Allies: Harnessing Government Support for Agricultural Advancement.';
const description='We collaborate with government initiatives to empower Farmer Producer Organizations (FPOs), facilitating the establishment of Warehouse Development Centers (WDCs) and enabling FPOs to showcase their array of services, ultimately enhancing opportunities for farmers and agricultural growth.'
const backgroundText='About Us'

const footerDescription='Empowering FPOs with Government Support: Facilitating WDC Establishment and Showcasing Farmer Services using State-of-the-Art Technology.';

const AboutSection = () => {
    // Local Variables
    const imageLink='../../../public/images/placeholder/png'

    // State variables
    const theme=useTheme();
    const matches768px=useMediaQuery('(max-width:768px)')
    const matches1024px=useMediaQuery('(max-width:1024px)')

    // Styles
    const containerStyle={
        backgroundColor: theme.palette.primary.light,
    }
    const subheadingStyle={
      color: theme.palette.secondary.main
    }
    const headingStyle={
      color: theme.palette.text.primary
    }
    const descriptionStyle={
      color: theme.palette.text.secondary
    }
    const statsIconStyle={
      color: theme.palette.secondary.main,
    }
    const statsIconContainerStyle={
      borderColor: theme.palette.secondary.main
    }
    const statsNumberStyle={
      color: theme.palette.text.primary
    }
    const statsTextStyle={
      color: theme.palette.text.secondary
    }
    const contactUsButtonStyle={
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      margin: '10px 0',
      '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
      },
  }

    // Data
    let iconSize='large';
    let buttonSize='large'
    if(matches768px){
      iconSize='small';
      buttonSize='small'
    }
    else if(matches1024px){
      iconSize='medium';
      buttonSize='medium';
    }
    const statistics=[
      {
        number: "25K",
        text: 'Satisfied Customers',
        icon: <GroupsIcon fontSize={iconSize} sx={statsIconStyle}/>
      },
      {
        number: '10K',
        text: 'Verified FPOs',
        icon: <VerifiedIcon fontSize={iconSize} sx={statsIconStyle}/>
      }
    ]

  return (
    <section className={styles.container} style={containerStyle}>
        <img src="/images/figures/building.svg" alt="" className={styles.buildingFigure}/>
        <img src="/images/figures/wave.svg" alt="" className={styles.waveFigure}/>
        <section className={styles.imageSection}>
          <img src='/images/placeholder.png' className={styles.image}/>
        </section>
        <section className={styles.contentSection}>
          <div className={styles.contentHeader}>
            <span className={styles.subheading} style={subheadingStyle}>
              {subheading}
            </span>
            <span className={styles.heading} style={headingStyle}>
              {heading}
            </span>
            <span className={styles.description} style={descriptionStyle}>
              {description}
            </span>
            <div className={styles.backgroundText}>{backgroundText}</div>
          </div>
          <div className={styles.contentFooter}>
              <div className={styles.statsContainer}>
                {
                  statistics.map((stats,index)=>{
                    
                    return <div className={styles.stats} key={index}>
                              <div className={styles.statsIconContainer} styles={statsIconContainerStyle}>
                                {stats.icon}
                              </div>
                              <div className={styles.statsData}>
                                <span className={styles.statsNumber} style={statsNumberStyle}>
                                  {stats.number}+
                                </span>
                                <span className={styles.statsText} style={statsTextStyle}>
                                  {stats.text}+
                                </span>
                              </div>
                            </div>
                    
                  })
                }
              </div>
              <div className={styles.description} style={descriptionStyle}>{footerDescription}</div>
              <Link to='/contact'>
                <Button variant='contained' size={buttonSize} className={styles.contactUsButton} sx={contactUsButtonStyle}>Contact Us</Button>
              </Link>
          </div>
        </section>
    </section>
  )
}

export default AboutSection