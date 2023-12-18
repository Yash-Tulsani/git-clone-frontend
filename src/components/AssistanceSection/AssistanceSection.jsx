import React from 'react'
import styles from './AssistanceSection.module.css'
import { useTheme } from '@mui/material'
import Divider from '@mui/material/Divider';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import {useMediaQuery} from '@mui/material'

const AssistanceSection = () => {
  // States variables
  const theme=useTheme();
  const matches400=useMediaQuery('(max-width:600px)');
  const matches600=useMediaQuery('(max-width:600px)');
  const matches768=useMediaQuery('(max-width:768px)');
  const matches1024=useMediaQuery('(max-width:1024px)');

  let iconSize='2rem';
  if(matches400){
    iconSize='1rem';
  }
  else if(matches600){
    iconSize='1.2rem';
  }
  else if(matches768){
    iconSize='1.5rem';
  }
  else if(matches1024){
    iconSize='2rem';
  }
  // Styles
  const boxStyle={
    backgroundColor: theme.palette.text.primary,
  }
  const headingStyle={
    color: theme.palette.primary.main,
  }
  const subHeadingStyle={
    color: theme.palette.secondary.light,
  }
  const iconStyle={
    color: theme.palette.primary.main,
    borderRadius: '50%',
    backgroundColor: '#395B80',
    padding: '0.3rem',
    fontSize: iconSize,
  }
  const dividerStyle={
    backgroundColor: theme.palette.primary.main,
    width: '0.08rem',
  }

  // Local variables
  const headingText1=`We're Supporting FPOs:`
  const headingText2=`Setting up WDCs & Showcasing Farmer Services.`
  const subHeadingText=`In our commitment to agricultural empowerment, we're actively assisting Farmer Producer Organizations (FPOs) in establishing Warehousing Development Centers (WDCs) while facilitating the platform for showcasing their diverse services directly to farmers.`
  const contactInfo=[
    {
      name: 'Our Hot Line',
      value: '+91-87077470004',
      icon: <CallIcon sx={iconStyle}/>
    },
    {
      name: 'Mail Us',
      value: 'git-clone@gmail.com',
      icon: <EmailIcon sx={iconStyle}/>
    }
  ]


  return (
    <section className={styles.box} style={boxStyle}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src='/images/modiji.png' className={styles.figure}/>
          <div className={styles.assistanceInfoContainer}>
            <div className={styles.header}>
              <span className={styles.heading} style={headingStyle}>
                <p>{headingText1}</p>
                <p>{headingText2}</p>
              </span>
              <span className={styles.subHeading} style={subHeadingStyle}>
                {subHeadingText}
              </span>
            </div>
            <div className={styles.contactInfoContainer}>
              {
                contactInfo.map((info, index) => (
                  <>
                    <div className={styles.contactInfoBox} key={index}>
                      {info.icon}
                      <div className={styles.contactInfoData}>
                        <span className={styles.contactName}>{info.name}</span>
                        <span className={styles.contactValue}>{info.value}</span>
                      </div>
                    </div>
                    {index!==contactInfo.length-1 && <Divider sx={dividerStyle} orientation='vertical'/>}
                  </>
                ))
              
              }
            </div>
          </div>
        </div>
      </div>
      <img src='/images/figures/building-alternate.svg' className={styles.buildingFigure}/>
      <img src='/images/figures/dotted-mesh.svg' className={styles.dottedFigure}/>
    </section>
  )
}

export default AssistanceSection