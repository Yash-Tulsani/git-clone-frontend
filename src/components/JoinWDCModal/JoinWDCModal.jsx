import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './JoinWDCModal.module.css'
import { useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import {toast} from 'react-toastify';
import { useSelector } from 'react-redux';


export default function JoinWDCModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [amountRequired, setAmountRequired] = React.useState(0);
  const [stake, setStake] = React.useState(1);
  const {currentUser} = useSelector(state => state.user);

  console.log(currentUser, "current user")

  // Temporary
  const wdc = {
    "_id": "658126e069204a849242b83d",
    "FPO_id": {
      "$oid": "658125d0d2fe0d45ce703921"
    },
    "FPO_name": "Tambarm FPO",
    "name": "Wasteshed Royapettah",
    "address": "Sample FPO Address",
    "district": "Royapettah",
    "state": "Tamil Nadu",
    "dateRegistered": {
      "$date": {
        "$numberLong": "1702962912201"
      }
    },
    "status": "Pending Approval",
    "coordinates": [],
    "__v": {
      "$numberInt": "0"
    },
    "percentageOccupied": {
      "$numberInt": 3
    },
    "head_id": {
      "$oid": "657ddf2c34e46d4e31bfbe18"
    },
    "head_name": "Uma",
    "description": "Sample FPO description",
    "images": [
      "https://i0.wp.com/www.jeevantirth.org/wp-content/uploads/2020/12/JT-Icons-FPO.jpg"
    ],
    "members": [
      {
        "$oid": "657ddf2c34e46d4e31bfbe14"
      },
      {
        "$oid": "65806bea79bad2b8ee03c8c9"
      }
    ],
    "services": [],
    "phoneNumber": {
      "$numberDouble": "6625552707.0"
    },
    "email": "fpo1@example.com",
    "publicInvestment": 500000
  };


  
  // Styles
  const containerStyle = {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '80%',
    maxWidth: '600px',
    height: '80%',
    maxHeight: '700px',
    boxShadow: '0 0 10px rgb(107, 107, 107)',
  };

  // Event Handlers
  const handleStakeChange = (event, newValue) => {
    setStake(newValue);
    setAmountRequired(newValue*wdc.publicInvestment/100);
  }

  const handleJoin = async() => {
    const data={
      wdc_id: wdc._id,
      stakePercentage: stake,
      amount: amountRequired,
      user_id: currentUser._id
    }
    const response = await toast.promise(
      fetch(`${process.env.REACT_APP_API_URL}/api/fpo/joinFpo`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }),
      {
        pending: 'Joining FPO...',
        success: 'FPO Joined Successfully 👌',
        error: 'Something went wrong! Please Try Again 🤯'
      }
  );

    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={containerStyle} className={styles.container}>
          <section className={styles.headerSection}>
            <div className={styles.heading}>{wdc.name}</div>
            <div className={styles.subHeadingContainer}>
              <span className={styles.subHeadingHead}>Managed By:</span>
              <span className={styles.subHeading}>{wdc.FPO_name}</span>
            </div>
          </section>
          <section className={styles.detailsSection}>
            <div className={styles.detailsHeading}>Details:</div>
            <div className={styles.detailsContainer}>
              <div className={styles.detail}>
                <span className={styles.detailHead}>Address:</span>
                <span className={styles.detailContent}>{`${wdc.district}, ${wdc.state}, India`}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailHead}>Status:</span>
                <span className={styles.detailContent}>{`${wdc.status}`}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailHead}>Email:</span>
                <span className={styles.detailContent}>{`${wdc.email}`}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailHead}>Date Registered:</span>
                <span className={styles.detailContent}>{`${wdc.dateRegistered}`}</span>
              </div>
            </div>
          </section>
          <Divider/>
          <section className={styles.paymentDetails}>
            <div className={styles.detailsHeading}>Payment Details:</div>
            <div className={styles.stakeContainer}>
              <div className={styles.stakeHead}>Stake:</div>
              <div className={styles.stakeContent}>
                <Slider
                  defaultValue={1}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={1}
                  max={`100`}
                  style={{width:'100%'}}
                  color="secondary"
                  onChange={handleStakeChange}
                  value={stake}
                />
              </div>
            </div>
            <div className={styles.amountRequiredContainer}>
                <div className={styles.amountRequiredHead}>Amount Required:</div>
                <div className={styles.amountRequiredContent}>&#8377; {amountRequired}</div>
            </div>

          </section>
          <Divider/>
          <section className={styles.buttonSection}>
            <Button variant="contained" color="secondary" sx={{color:theme.palette.primary.main}} className={styles.button} onClick={handleJoin}>Join</Button>
            <Button variant="contained" color="error" className={styles.button} onClick={handleClose}>Cancel</Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
}