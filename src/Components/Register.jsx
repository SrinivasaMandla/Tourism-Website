import React, { useState } from 'react'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

import '../Assets/CSS/Login.css';
import register from '../Assets/Images/register.png';
import user from '../Assets/Images/user.png';
import Footer from './Footer';

function Register() {

  const navigation=useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.userName === '') {
      alert('User name is required');
      return;
    }
    if (formData.email === '') {
      alert('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Email is invalid');
      return;
    }
    if (formData.password === '') {
      alert('Password is required');
      return;
    } else if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
    // try {
    //   const response = await fetch('https://tour-booking-tu7f.onrender.com/api/v1/auth/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
  
    //   const responseData = await response.json();
  
    //   if (!response.ok) {
    //     // Check if there's a specific error message from the server
    //     if (responseData && responseData.message) {
    //       throw new Error(responseData.message);
    //     } else {
    //       throw new Error('Registration unsuccessful');
    //     }
    //   }
  
      // Registration successful
      alert('Registration Successful');
  
      // Store data in local storage
      const userData = {
        userName: formData.userName,
        email: formData.email,
        // You might want to hash or encrypt the password before storing it.
        // For demonstration purposes, I'm storing it as plain text.
        password: formData.password
      };
  
      // Convert the userData object to a string before storing it in local storage
      localStorage.setItem('userData', JSON.stringify(userData));
  
      // Optionally, you can redirect the user to another page after successful registration
      navigation( '/login');
    // } catch (error) {
    //   alert(error.message);
    // }
  };
  

  return (
    <>
      <Navbar isLoggedIn={false}/>
      <div className='register p-5 pb-4'>
        <div className='Register-form'>
          <div className='register-left'>
            <img src={register} alt="register" width='100%' />
          </div>
          <div className='register-right '>
            <img src={user} alt="user" />
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='User name' name='userName' value={formData.userName} onChange={handleChange} /><br />
              <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} /><br />
              <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} /><br />
              <button>Create Account</button>
            </form>
            <p>Already have an Account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
      <Footer/>
    </ >
  )
}
export default Register;