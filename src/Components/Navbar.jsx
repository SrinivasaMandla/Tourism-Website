import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import Logo from '../Assets/Images/logo.png';
import '../Assets/CSS/Style.css';
import { useAuth } from './Authentication';

function Navbar() {
    const location = useLocation();

    const { isLoggedIn, logout } = useAuth();
    const userDataString = localStorage.getItem("userData");
    let userData = {};


    if (userDataString) {
        try {
            userData = JSON.parse(userDataString);
        } catch (error) {
            console.error("Error parsing user data:", error);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src={Logo} alt="" className='img-fluid ms-5 ps-5' width='240px' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav navigation ms-auto me-5" style={{ fontWeight: 'bold' }}>
                            <li className="nav-item ps-5">
                            <Link to="/" className="nav-link" style={{ color: location.pathname === "/" ? "orangered" : "black" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tours' className="nav-link" style={{ color: location.pathname === "/tours" ? "orangered" : "black" }}>Tours</Link>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    {userData && userData.data.username && (
                                        <li className="nav-item">
                                            <span className="nav-link usernameid" >{userData.data.username}</span>
                                        </li>
                                    )}
                                    <li className="nav-item me-5 ms-2">
                                        <button className="nav-link active btn text-white me-5" style={{ backgroundColor: 'black' }} onClick={logout}>Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to='/login' className="nav-link" style={{ color: location.pathname === "/login" ? "orangered" : "black" }}>Login</Link>
                                    </li>
                                    <li className="nav-item me-5 ms-2">
                                        <Link to='/register' style={{ textDecoration: 'none' }}>
                                            <button className="nav-link active btn text-white me-5" style={{ backgroundColor: 'orangered' }}>Register</button>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
