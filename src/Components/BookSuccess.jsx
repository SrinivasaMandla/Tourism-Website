import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/CSS/Booking.css';
import Navbar from './Navbar';
import Footer from './Footer';
import tickMark from "../Assets/Images/tick-circle.svg"

function BookSuccess() {
    
    
  return (
    <>
    <Navbar/>
      <div className='container'>
        <div className='booked-page'>
            <img src={tickMark} alt="" />
            <h3>𝓽𝓱𝓪𝓷𝓴 𝔂𝓸𝓾</h3>
            <p>Your tour is booked.</p>
            <Link to="/"><button>Back to Home</button></Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default BookSuccess;