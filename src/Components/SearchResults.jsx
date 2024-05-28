import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../Assets/CSS/Style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import tickMark from "../Assets/Images/tick-circle.svg"

function SearchResults() {
    const location = useLocation();
    const { data } = location.state || { data: [] };

    return (
        <div>
            <Navbar />
            <div className='container'>

                {data.length === 0 && (<div className='container'>
                    <div className='booked-page'>
                        <img src={tickMark} alt="" />
                        <h3>𝓢𝓸𝓻𝓻𝔂 </h3>
                        <p>𝓝𝓸 𝓽𝓻𝓲𝓹 𝓯𝓸𝓾𝓷𝓭...!</p>
                        <Link to="/"><button>Back to Home</button></Link>
                    </div>
                </div>)}
                {data.length > 0 && (
                    <div className="row mb-4">
                        {data.map((item) => (
                            <div className="col-md-3" key={item._id}>
                                <div className="card mt-4 tour-card">
                                    <img src={item.photo} className="card-img-top" alt={item.title} />
                                    <p className='fearured'>Fearured</p>
                                    <div className="card-body">
                                        <div className='tour-cardtext'>
                                            <span>
                                                <i className="fa-solid fa-location-dot" style={{ color: " #fe7216" }}></i>
                                                <strong>{item.city}</strong>
                                            </span>
                                            <span>
                                                <i className="fa-regular fa-star" style={{ color: " #fe7216" }}></i>
                                                {item.reviews.length > 0 ? (
                                                    (item.reviews.reduce(
                                                        (sum, review) => sum + review.rating, 0
                                                    ) / item.reviews.length).toFixed(1)
                                                ) : "no reviews"} ({item.reviews.length}) {""}
                                            </span>
                                        </div>
                                        <h6 className="card-title py-2">{item.title}</h6>
                                        <div className='tour-cardtext3'>
                                            <p><strong>${item.price} </strong>/per person</p>
                                            <Link to={`/booking/${item._id}`} style={{ textDecoration: 'none' }}>
                                                <button>Book now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Subscribe />
            <Footer />
        </div>
    );
}

export default SearchResults;
