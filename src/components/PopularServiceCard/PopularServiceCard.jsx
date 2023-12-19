import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material';
import styles from './PopularServiceCard.module.css'

export default function ActionAreaCard({service}) {
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
    }
    const wdcNameStyle={
      color: theme.palette.secondary.main,
    }
    const availableAmountStyle={
      color: theme.palette.secondary.main,
    }

  return (
    <Card>
      <CardActionArea>
        <Box className={styles.serviceImageContainer} sx={serviceImageContainerStyle}>
            <CardMedia
                component="img"
                image={service.FPO_id.images[0]}
                alt="Loading..."
                sx={serviceImageStyle}
                className={styles.serviceImage}
            />
        </Box>
        <CardContent>
          <Typography sx={serviceHeadingStyle} className={styles.serviceName} gutterBottom variant="h5" component="div" color="text.primary">
            {service.name}
          </Typography>
          <div className={styles.wdcContainer}>
            <span className={styles.wdcNameHead}>Associated WDC:</span>
            <span className={styles.wdcName} style={wdcNameStyle}>{service.WDC_id.name}</span>
          </div>
          <div className={styles.availableAmountContainer}>
            <span className={styles.availableAmountHead}>Quantitiy Left: </span>
            <span className={styles.availableAmount} style={availableAmountStyle}>{service.quantityLeft}</span>
          </div>
          <div className={styles.locationContainer}>
            <LocationOnIcon className={styles.locationIcon}/>
            <span className={styles.location}>{service.district}, {service.state}</span>
          </div>
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {service.description}
          </Typography>
          <div className={styles.priceContainer}>
            <span className={styles.priceHead}>Price per Unit: </span>
            <span className={styles.price}>₹{service.price/100}</span>
          </div>
        </CardContent>
        <Box className={styles.serviceButtonsContainer}>
            <Button variant="contained" sx={serviveButtonStyle} color="primary" className={styles.serviceButton}>
                Buy
            </Button>
            <Button variant="contained" sx={serviveButtonStyle} color="primary" className={styles.serviceButton}>
                Add to Cart
            </Button>
        </Box>
      </CardActionArea>
    </Card>
  );
}