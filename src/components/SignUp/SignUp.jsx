import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material'

const SignUp = () => {

  const theme = useTheme();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id] : e.target.value });
  }

    console.log(formData); 

    const successFunction = async (pos) => {
      const crd = pos.coords;
      const latitude = crd.latitude;
      const longitude = crd.longitude;
      await fetchUserAddress(latitude, longitude);
    };
  
    const errorFunction = (error) => {
      console.log(error);
    };
  
    const getLocation1 = () => {
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then(function (result) {
            if (result.state === 'granted') {
              navigator.geolocation.getCurrentPosition(successFunction);
            } else if (result.state === 'prompt') {
              navigator.geolocation.getCurrentPosition(
                successFunction,
                errorFunction
              );
            } else if (result.state === 'denied') {
              console.log('Prompt user to give permission');
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        alert('Geolocation not available!');
      }
    };
  
    const fetchUserAddress = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        setFormData({ ...formData, address: data.display_name });
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      setLoading(false);
      if(data.success === false){
        setError(true);
        return;
      }
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getLocation1();
  }, []);

  return (
    <div className='p-3 max-w-lg mx-auto my-10'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label for="name" className="font-medium">
          Name
          <strong>*</strong>
        </label>
        <input 
          type='text' 
          id='name' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="age" className="font-medium">
          Age
        <strong>*</strong>
      </label>
        <input
          type='number' 
          id='age' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="email" className="font-medium">
          Email
        <strong>*</strong>
      </label>
        <input 
          type='email' 
          id='email' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="password" className="font-medium">
          Password
        <strong>*</strong>
      </label>
        <input 
          type='password' 
          id='password' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="phoneNumber" className="font-medium">
          Phone Number
        <strong>*</strong>
      </label>
        <input 
          type='number' 
          id='phoneNumber' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="dateOfBirth" className="font-medium">
          Date Of Birth
        <strong>*</strong>
      </label>
        <input 
          type='date' 
          id='dateOfBirth' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="address" className="font-medium">
          Address
        <strong>*</strong>
      </label>
        <input 
          type='text' 
          id='address' 
          className='bg-slate-100 p-3 rounded-lg' 
          value={formData.address || ''}
          disabled
          onChange = {handleChange}
        />
      </div>
      <div className='flex flex-col'>
      <label for="pincode" className="font-medium">
          Pincode
        <strong>*</strong>
      </label>
        <input
          type='number' 
          id='pincode' 
          className='bg-slate-100 p-3 rounded-lg' 
          onChange = {handleChange}
        />
      </div>
        <button disabled={loading} style={{backgroundColor:`${theme.palette.text.primary}`}} className='text-white p-3 rounded-lg uppercase hover:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
        {/* <button disabled={loading} style={{backgroundColor:`${theme.palette.secondary.main}`}} className='text-white p-3 rounded-lg uppercase hover:opacity-80'>{loading ? 'Loading...' : 'Continue with Google'}</button> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to = "/signin">
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}

export default SignUp;
