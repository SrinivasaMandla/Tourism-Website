import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginImg from "../Assets/Images/login.png";
import LoginImg1 from "../Assets/Images/user.png";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Authentication";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await fetch(
          'https://tour-booking-tu7f.onrender.com/api/v1/auth/login',
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Login Successful:", data);
          alert("Login successful");
          localStorage.setItem("userData", JSON.stringify(data));
          
          navigate("/");
          login();
        } else {
          const errorData = await response.json();
          alert(`Login failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred during login. Please try again.");
      }
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className='register p-5 pb-4'>
        <div className='Register-form'>
          <div className='register-left'>
            <img src={LoginImg} alt="register" width='100%' />
          </div>
          <div className='register-right'>
            <img src={LoginImg1} alt="user" />
            <h3>Login</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
              <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <button type='submit' onClick={handleLogin}>Login</button>
            </form>
            <p>Don't have an Account? <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
