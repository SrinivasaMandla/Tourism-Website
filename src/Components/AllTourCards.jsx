import React, { useEffect, useState } from 'react';
import '../Assets/CSS/Style.css';
import { Link } from 'react-router-dom';
import "../Assets/CSS/Loader.css";

function AllTourCards() {
    const [data, setData] = useState([]);
    const [num, setNum] = useState(1); // Initialize page number
    const itemPerPage = 8;

    useEffect(() => {
        getData(num); // Fetch data when the component mounts or the page number changes
    }, [num]);

    const getData = async () => {
        const response = await fetch('https://tour-booking-tu7f.onrender.com/api/v1/tours', {
            method: "GET",
            headers: {
                "app-id": "65264833377b2d988a461078"
            },
        });
        const responseData = await response.json();
        setData(responseData.data);
    };

    const handleClick = (page) => {
        setNum(page); // Set the page number when a page button is clicked
    };

    const startIndex = (num - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    return (
        <React.Fragment>
            <div className="container mb-5">
                <div className='FeaturedTours my-4'>
                    <p><i>Explore</i></p>
                    <h2>All tours</h2>
                </div>
                {
                    data.length > 0 ? (
                        <div className="row">
                            {data.slice(startIndex, endIndex).map((item) => (
                                <div className="col-md-3" key={item._id}>
                                    <div className="card mt-4 tour-card">
                                        <img src={item.photo} className="card-img-top" alt="Tour images" />
                                        <p className='fearured'>Featured</p>
                                        <div className="card-body">
                                            <div className='tour-cardtext'>
                                                <span>
                                                    <i className="fa-solid fa-location-dot" style={{ color: " #fe7216" }}></i>
                                                    <strong> {item.city}</strong>
                                                </span>
                                                <span>
                                                    <i className="fa-regular fa-star" style={{ color: " #fe7216" }}></i>
                                                    {item.reviews.length > 0 ? (
                                                        (item.reviews.reduce(
                                                            (sum, review) => sum + review.rating, 0
                                                        ) / item.reviews.length).toFixed(1) ): "no reviews"
                                                    } ({item.reviews.length})
                                                </span>
                                            </div>
                                            <Link to={`/tours/${item._id}`} style={{ textDecoration: 'none' }}>
                                                <h6 className="card-title py-2">{item.title}</h6>
                                            </Link>
                                            <div className='tour-cardtext3'>
                                                <p><strong>${item.price} </strong>/per person</p>
                                                <Link to={`/tours/${item._id}`} style={{ textDecoration: 'none' }}>
                                                    <button>Book now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="loader1">
                            <label>Loading...</label>
                            <div className="loading"></div>
                        </div>
                    )
                }
            </div>
            <div className='pageNumbers'>
                {
                    [1, 2].map((page) => (
                        <button key={page}
                            className={`mb-5 ${num === page ? 'active' : ''}`}
                            onClick={() => handleClick(page)}>{page}</button>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default AllTourCards;
