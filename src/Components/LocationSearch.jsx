import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/Style.css';

function LocationSearch() {
    const [city, setCity] = useState('');
    const [distance, setDistance] = useState('');
    const [maxGroupSize, setMaxGroupSize] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        if (city === '' || distance === '' || maxGroupSize === '') {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch(
                `https://tour-booking-tu7f.onrender.com/api/v1/tours/search/getTourBySearch?city=${encodeURIComponent(city)}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
                {
                    method: "GET",
                    headers: {
                        "app-id": "65264833377b2d988a461078",
                    },
                }
            );
            const res = await response.json();
            console.log("Response from API:", res); // Add this line
            const data = res.data && Array.isArray(res.data) ? res.data : [];
            navigate(`/tours/search?city=${encodeURIComponent(city)}&distance=${distance}&maxgroupsize=${maxGroupSize}`, { state: { data } });
        } catch (error) {
            console.error("Error fetching data:", error);
            navigate('/tours/search', { state: { data: [] } });
        }
    };

    return (
        <div className="search-location">
            <div className="location-search my-1 pb-2">
                <div className='location-box'>
                    <span className='pe-2'>
                        <i className="fa-solid fa-location-dot" style={{ color: "#e9642b" }}></i>
                    </span>
                    <span> Location</span><br />
                    <input
                        type="text"
                        className='ms-4'
                        placeholder='Where are you going?'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='location-box'>
                    <span className='pe-2'>
                        <i className="fa-solid fa-location-dot" style={{ color: "#e9642b" }}></i>
                    </span>
                    <span> Distance</span><br />
                    <input
                        type="text"
                        placeholder='Distance (km)'
                        className='ms-4'
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </div>
                <div>
                    <span className='pe-2'>
                        <i className="fa-solid fa-user-group" style={{ color: "#e9642b" }}></i>
                    </span>
                    <span> Max People</span><br />
                    <input
                        type="number"
                        placeholder='0'
                        className='ms-4'
                        value={maxGroupSize}
                        onChange={(e) => setMaxGroupSize(e.target.value)}
                    />
                    <button
                        type='submit'
                        onClick={handleSearch}
                        className='btn ms-5'
                        style={{ background: "#e9642b" }}
                    >
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LocationSearch;
