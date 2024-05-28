import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../Assets/CSS/Login.css';
import loginIMG from '../Assets/Images/login.png';
import user from '../Assets/Images/user.png';
import Footer from './Footer';
import { useAuth } from './Authentication';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const isAuthenticated = AuthenticateUser(formData.email, formData.password);
      if (isAuthenticated) {
        login();
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please enter the email and password.");
    }
  };

  const AuthenticateUser = (email, password) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData && userData.email === email && userData.password === password;
  };

  return (
    <>
      <Navbar />
      <div className='register p-5 pb-4'>
        <div className='Register-form'>
          <div className='register-left'>
            <img src={loginIMG} alt="register" width='100%' />
          </div>
          <div className='register-right'>
            <img src={user} alt="user" />
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} /><br />
              <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} /><br />
              <button type='submit'>Login</button>
            </form>
            <p>Don't have an Account? <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
