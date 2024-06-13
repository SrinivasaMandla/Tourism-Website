import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Reviews from './Reviews';
import '../Assets/CSS/Booking.css';
import "../Assets/CSS/Loader.css";
import { useAuth } from './Authentication';

const Booking = () => {
    const { isLoggedIn, token } = useAuth(); // Assuming useAuth provides the token
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getData = async () => {
        const response = await fetch(`https://tour-booking-tu7f.onrender.com/api/v1/tours/${id}`);
        const res = await response.json();
        setProduct(res.data);
    };

    useEffect(() => {
        getData();
    }, [id]);

    const validate = () => {
        if (!fullName) {
            alert('Full Name is required');
            return false;
        }
        if (!phoneNumber) {
            alert('Phone Number is required');
            return false;
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            alert('Phone Number must be 10 digits');
            return false;
        }
        if (!date) {
            alert('Date is required');
            return false;
        }
        if (!numPeople) {
            alert('Number of people is required');
            return false;
        } else if (isNaN(numPeople) || numPeople <= 0) {
            alert('Enter a valid number of people');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!isLoggedIn) {
            alert('Please login for booking.');
            return; // Stop further execution
        }

        if (validate()) {
            setIsSubmitting(true);

            const bookingDetails = {
                fullName,
                phoneNumber,
                date,
                numPeople,
                tourId: id,
            };

            try {
                const response = await fetch('https://tour-booking-tu7f.onrender.com/api/v1/booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Include the token in the headers
                    },
                    body: JSON.stringify(bookingDetails),
                });

                const result = await response.json();
                    console.log(result);
                if (response.ok) {
                    localStorage.setItem('bookingData', JSON.stringify(result.data));
                    console.log('Booking success!', result.data);
                    navigate("/booking/successful"); // Redirect to the "booked" page
                } else {
                    alert('Booking failed: ' + result.message);
                }
            } catch (error) {
                alert('An error occurred: ' + error.message);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            <Navbar />
            {product ? (
                <div className='container my-3'>
                    <div className="row">
                        <div className="col-md-7 booking-card ">
                            <img src={product.photo} alt={product.title} />

                            <div className='border mt-4 px-5 py-4 booking-desc'>
                                <h5>{product.title}</h5>
                                <p>
                                    <span>
                                        <i className="fa-regular fa-star" style={{ color: "#fbae09" }}></i>
                                        {product.reviews.length > 0 ? (
                                            product.reviews.reduce(
                                                (sum, review) => sum + review.rating, 0
                                            ) / product.reviews.length
                                        ).toFixed(1) : "no reviews"}
                                        ({product.reviews.length}) {" "}
                                    </span>
                                    <span className='ps-5'>
                                        <i className="fa-solid fa-user-gear"></i> {product.address}
                                    </span>
                                </p>
                                <div className='booking-descrtion'>
                                    <span><i className="fa-solid fa-location-dot"></i> {product.city}</span>
                                    <span><i className="fa-solid fa-circle-dollar-to-slot"></i> {product.price} per person</span>
                                    <span><i className="fa-solid fa-location-dot"></i> {product.distance} k/m</span>
                                    <span><i className="fa-regular fa-user"></i> {product.maxGroupSize} people</span>
                                </div>
                                <h5>Description</h5>
                                <p><textarea className='description' type="text" placeholder='this is the description' /></p>
                            </div>
                        </div>
                        <div className="col-md-5 border booking-cardright">
                            <div className='booking-right p-4'>
                                <p>
                                    <span className='head'>{product.price} </span>
                                    <span> /Per person </span>
                                    <span>
                                        <i className="fa-regular fa-star" style={{ color: "#fbae09" }}></i>
                                        {product.reviews.length > 0 ? (
                                            product.reviews.reduce(
                                                (sum, review) => sum + review.rating, 0
                                            ) / product.reviews.length
                                        ).toFixed(1) : "no reviews"}
                                        ({product.reviews.length}) {" "}
                                    </span>
                                </p>
                                <h6>Information</h6>
                                <div className='booking-form border'>
                                    <input
                                        type="text"
                                        placeholder='Full Name'
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    /><br />
                                    <input
                                        type="text"
                                        placeholder='Phone Number'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    /><br />
                                    <div style={{ display: 'flex' }}>
                                        <input
                                            type="date"
                                            style={{ width: '50%', marginRight: "10px" }}
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder='Number of people'
                                            style={{ width: '50%' }}
                                            value={numPeople}
                                            onChange={(e) => setNumPeople(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='booking-botton'>
                                    <p>{product.price} x {product.maxGroupSize} person <span>{product.price * product.maxGroupSize}</span></p>
                                    <p>Service charges <span>10</span></p>
                                    <h6>Total <span style={{ marginLeft: '2.4em' }}>{product.price * product.maxGroupSize + 10}</span></h6>
                                    <button onClick={handleSubmit} disabled={isSubmitting}>
                                        {isSubmitting ? 'Booking...' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Reviews product={product} /> {/* Render the Reviews component */}
                </div>
            ) : (
                <div className="loader">
                    <div className="cube">
                        <div className="face"></div>
                        <div className="face"></div>
                        <div className="face"></div>
                        <div className="face"></div>
                        <div className="face"></div>
                        <div className="face"></div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Booking;
