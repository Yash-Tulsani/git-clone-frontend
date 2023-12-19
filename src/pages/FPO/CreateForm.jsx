import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const CreateForm = () => {
  const [fpoName, setFPOName] = useState('');
  const [headName, setHeadName] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [membersAdded, setMembersAdded] = useState([]);

  const [emailError, setEmailError] = useState(false);
  const [formError, setFormError] = useState(false);

  // Event handler to set the focused field
  const handleFocus = (fieldName) => {
    // Implement if needed
  };

  // Event handler to reset the focused field
  const handleBlur = () => {
    // Implement if needed
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));

    // Validate all required fields
    const requiredFields = [fpoName, headName, email, district, phoneNumber, address];
    setFormError(requiredFields.some((field) => field === ''));
    // If there are validation errors, prevent form submission
    if (emailError || formError) {
      return;
    }

    // Collect form data
    const formData = {
      name: fpoName,
      head_name: headName,
      email: email,
      district: district,
      phoneNumber: phoneNumber,
      address: address,
      selectedValue: selectedValue,
      members: membersAdded
    };

    // Log the form data (replace with your API call)
    console.log('Form Data:', formData);

    // Add selected value to membersAdded
    
    axios
      .post(`${URL}/api/user/fpo-create`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // TODO: Send data to the backend (you can use fetch or axios here)
  };
  const [values, setValues] = useState([8493793074,23497328947,38473284234,3490238497]);
  React.useEffect(() => {
    const populateIds = () => {
      const data = axios.get(`${URL}/api/user/getIds`)
        .then((response) => {

          const modifiedList = response.data.map((originalObj) => {
            const newObj = { ['item']: originalObj["_id"] };
            return newObj;
          });

          console.log(modifiedList)
          //setValues(modifiedList)
        })
        .catch((err) => {
          console.log(err);
        })
      }
    populateIds();
  }, [])
  const menuItems = values.length != 0 ? values.map((value) => (
    <MenuItem key={value} value={value}>
      {value}
    </MenuItem>
  )) : [123,231];
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
            <Paper style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to bottom, rgba(255, 140, 0, 0.94), #fff)', borderRadius: '20px' }}>
              {/* Heading */}
              <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                Create an FPO
              </Typography>

              {/* Form Fields */}
              <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                <TextField
                  placeholder='Name of the FPO'
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={fpoName}
                  onChange={(e) => setFPOName(e.target.value)}
                  onFocus={() => handleFocus('fpoName')}
                  onBlur={handleBlur}
                  InputProps={{ style: { color: 'black' } }}
                  required
                />
                <TextField
                  placeholder='Name of the Head'
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={headName}
                  onChange={(e) => setHeadName(e.target.value)}
                  onFocus={() => handleFocus('headName')}
                  onBlur={handleBlur}
                  InputProps={{ style: { color: 'black' } }}
                  required
                />
                <TextField
                  placeholder='Email'
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  InputProps={{ style: { color: 'black' } }}
                  type="email"
                  required
                  error={emailError}
                  helperText={emailError ? 'Enter a valid email address' : ''}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      placeholder="District"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      onFocus={() => handleFocus('district')}
                      onBlur={handleBlur}
                      InputProps={{ style: { color: 'black' } }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      placeholder="Phone Number"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      onFocus={() => handleFocus('phoneNumber')}
                      onBlur={handleBlur}
                      InputProps={{ style: { color: 'black' } }}
                      type="number"
                      required
                    />
                  </Grid>
                </Grid>
                <TextField
                  placeholder="Address"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onFocus={() => handleFocus('address')}
                  onBlur={handleBlur}
                  InputProps={{ style: { color: 'black' } }}
                  required
                />

                {/* Dropdown */}
                <Select
                  value={selectedValue}
                  onChange={(e) => {
                    setSelectedValue(e.target.value)
                    setMembersAdded([...membersAdded, e.target.value]);
                    setSelectedValue('');
                    let newValues = values.filter((element) => element !== e.target.value);
                    setValues(newValues);
                  }}
                  variant="outlined"
                  fullWidth
                  style={{ marginTop: '10px' }}
                >
                 {menuItems}
                </Select>

                {/* Submit Button */}
                <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e)} style={{ marginTop: '10px' }}>
                  Submit
                </Button>

                {/* Display form error message */}
                {formError && (
                  <Typography variant="caption" style={{ color: 'black', marginLeft: '10px', fontSize: '15px' }}>
                    Please fill in all required fields.
                  </Typography>
                )}
              </form>
            </Paper>
          </Grid>

          {/* Members Added Card */}
          <Grid item xs={12} sm={4}>
            <Card style={{ borderRadius: '20px', marginTop: '20px', background: 'linear-gradient(to bottom, rgba(255, 140, 0, 0.94), #fff)' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'black' }}>
                  Members Added
                </Typography>
                {membersAdded.length > 0 ? (
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {membersAdded.map((member, index) => (
                      <li key={index} style={{ marginBottom: '10px' }}>
                        {member}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body2" style={{ color: 'black' }}>
                    No members added yet.
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateForm;
