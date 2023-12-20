import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './JoinWDCModal.module.css'
import { useTheme } from '@mui/material';



export default function JoinWDCModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  // Temporary
  const wdc={
    
  }

  // Styles
  const containerStyle = {
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '80%',
    maxWidth: '750px',
    height: '80%',
    maxHeight: '700px',
    boxShadow: '0 0 10px rgb(107, 107, 107)',
  };

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
          
        </Box>
      </Modal>
    </div>
  );
}