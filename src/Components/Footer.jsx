import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/Images/logo.png';

const Footer = () => {
    return (
        <>
            <div className='Footer py-2'>
                <div className="container px-4 my-4">
                    <div className="row py-4">
                        <div className="col-md-3 footer-1">
                            <img src={logo} alt="logo" className='py-2' width='80%' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <div className='footer-i'>
                                <i className="fa-solid fa-user-gear"></i>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className='footer-2' >
                                <h6>Discover</h6>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link to='/tours'>Tours</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className='footer-2'>
                                <h6>Quick Links</h6>
                                <li>Gallery</li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className='footer-4'>
                                <h6>Contact</h6>
                                <p><i className="fa-solid fa-location-dot pe-1" style={{ color: "#fe9116" }}> </i> Address: <span className='ps-2'> Shimogga, Karnataka</span></p>
                                <p><i className="fa-regular fa-envelope pe-1" style={{ color: "#fe9116" }}></i> Email: <span className='ps-2'> srinivas9009@gmail.com</span></p>
                                <p><i className="fa-solid fa-phone-volume pe-1" style={{ color: "#fe9116" }}></i> Phone: <span className='ps-2'> +91 86604 35323</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='footer-copy py-3'>Copyright 2024, Design and develop by Srinivas M Helvar. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;
