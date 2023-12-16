import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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

  return (
    <Card>
      <CardActionArea>
        <Box className={styles.serviceImageContainer} sx={serviceImageContainerStyle}>
            <CardMedia
                component="img"
                image={service.image}
                alt="green iguana"
                sx={serviceImageStyle}
                className={styles.serviceImage}
            />
        </Box>
        <CardContent>
          <Typography sx={serviceHeadingStyle} gutterBottom variant="h5" component="div" color="text.primary">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
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