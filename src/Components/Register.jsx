import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

import '../Assets/CSS/Login.css';
import register from '../Assets/Images/register.png';
import user from '../Assets/Images/user.png';
import Footer from './Footer';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
                              
  const handleRegister = async () => {
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (username && email && password) {
      const userData = { username, email, password };
    
      try {
        const response = await fetch(
          "https://tour-booking-tu7f.onrender.com/api/v1/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
    
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
          alert(`Registration failed: ${errorData.message || "Please try again."}`);
        } else {
          const data = await response.json();
          console.log("Registration successful:", data);
          localStorage.setItem("userData", JSON.stringify(userData));
          alert("Registration successful.");
          // After successful registration, navigate to login page or perform any other necessary actions
           navigate("/login");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter username, email, and password.");
    }
  };

  return (
    <>
      <Navbar isLoggedIn={false} />
      <div className="register p-5 pb-4">
        <div className="Register-form">
          <div className="register-left">
            <img src={register} alt="Register" width="100%" />
          </div>
          <div className="register-right">
            <img src={user} alt="User" />
            <h3 >Register</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                id="UserName"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br />
              <input
                type="email"
                id="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br />
              <input
                type="password"
                id="UserPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br />
              <button onClick={handleRegister}>Create Account</button>
            </form>
            <p>Already have an account?{" "}<Link to="/login" >Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
