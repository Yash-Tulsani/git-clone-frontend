import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material';
import styles from './AvailableWDCsCard.module.css'
import { Link } from 'react-router-dom';
const jsonList = require('../../components/data.json');

export default function AvailableWDCsCard({open,setOpen,handleOpen,handleClose,wdc,index,setCurrentWDC}) {
    const myArray = [0,1,2,3,4]
    const theme=useTheme()
    

    // Styles
    const serviceHeadingStyle={
        color: theme.palette.text.primary,
        fontWeight: 500
    }
    const serviceImageContainerStyle={
        width: "100%",
        height: "200px",
        overflow: "hidden",
    }
    const serviceImageStyle={
        height: "100%",   
    }
    const serviveButtonStyle={
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
        width: "100%",
    }
    const wdcStatusStyle={
      color: theme.palette.secondary.main,
    }
    const availableAmountStyle={
      color: theme.palette.secondary.main,
    }


    // Event Handlers
    const handleBuyClick = () => {
      setCurrentWDC(wdc);
      handleOpen();
    }

  return (
    <Card>
      <CardActionArea>
        <Box className={styles.serviceImageContainer} sx={serviceImageContainerStyle}>
            <CardMedia
                component="img"
                image={`/images/demoImages/${index+1}.jpg`}
                alt="Loading..."
                sx={serviceImageStyle}
                className={styles.serviceImage}
            />
        </Box>
        <CardContent>
          <Typography sx={serviceHeadingStyle} className={styles.serviceName} gutterBottom variant="h5" component="div" color="text.primary">
            {wdc.name}
          </Typography>
          <div className={styles.availableAmountContainer}>
            <span className={styles.availableAmountHead}>Percentage Occupied: </span>
            <span className={styles.availableAmount} style={availableAmountStyle}>{wdc.percentageOccupied}</span>
          </div>
          <div className={styles.locationContainer}>
            <LocationOnIcon className={styles.locationIcon}/>
            <span className={styles.location}>{wdc.district}, {wdc.state}</span>
          </div>
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {jsonList.description[Math.floor(Math.random() * myArray.length)]}
          </Typography>
        
        </CardContent>
        <Box className={styles.serviceButtonsContainer}>
              <Button variant="contained" sx={serviveButtonStyle} onClick={handleBuyClick} color="primary" className={styles.serviceButton}>
                  Buy
              </Button>
              {/* <Button variant="contained" sx={serviveButtonStyle} color="primary" className={styles.serviceButton}>
                  Know More
              </Button> */}
        </Box>
      </CardActionArea>
    </Card>
  );
}