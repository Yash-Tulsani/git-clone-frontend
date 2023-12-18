import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CreateForm = () => {
  // State to track focused field
  const [focusedField, setFocusedField] = useState(null);

  // Event handler to set the focused field
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  // Event handler to reset the focused field
  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowY: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/farmerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          {/* Second Column - Form */}
          <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
            <Paper style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px' }}>
              {/* Heading */}
              <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                Create an FPO
              </Typography>

              {/* Form Fields */}
              <form style={{ width: '100%' }}>
                <TextField
                  placeholder='Name of the Head'
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  style={{
                    marginBottom: '16px',
                    border: focusedField === 'headName' ? '2px solid black' : '1px solid rgba(0, 0, 0, 0.03)',
                  }}
                  onFocus={() => handleFocus('headName')}
                  onBlur={handleBlur}
                />
                <TextField
                  placeholder='Email'
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  style={{
                    marginBottom: '16px',
                    border: focusedField === 'email' ? '2px solid black' : '1px solid rgba(0, 0, 0, 0.23)',
                  }}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
                <TextField
                  placeholder="District"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  style={{
                    marginBottom: '16px',
                    border: focusedField === 'district' ? '2px solid black' : '1px solid rgba(0, 0, 0, 0.23)',
                  }}
                  onFocus={() => handleFocus('district')}
                  onBlur={handleBlur}
                />
                <TextField
                  placeholder="Phone Number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  style={{
                    marginBottom: '16px',
                    border: focusedField === 'phoneNumber' ? '2px solid black' : '1px solid rgba(0, 0, 0, 0.23)',
                  }}
                  onFocus={() => handleFocus('phoneNumber')}
                  onBlur={handleBlur}
                />
                <TextField
                  placeholder="Address"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  variant="outlined"
                  style={{
                    marginBottom: '16px',
                    border: focusedField === 'address' ? '2px solid black' : '1px solid rgba(0, 0, 0, 0.23)',
                  }}
                  onFocus={() => handleFocus('address')}
                  onBlur={handleBlur}
                />

                {/* Submit Button */}
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateForm;
