import React, { useState } from 'react';
import '../Assets/CSS/Booking.css';
import avatar from "../Assets/Images/avatar.jpg";
import { useAuth } from './Authentication';

const Reviews = ({ product }) => {
    const { isLoggedIn } = useAuth();

    const [rating, setRating] = useState(0);
    const [newReview, setNewReview] = useState('');
    const [reviews, setReviews] = useState([]);

    const userDataString = localStorage.getItem("userData");
    let userData = {};

    if (userDataString) {
        try {
            userData = JSON.parse(userDataString);
        } catch (error) {
            console.error("Error parsing user data:", error);
        }
    }

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    const handleReviewChange = (e) => {
        setNewReview(e.target.value);
    };

    const handleSubmit = async () => {
        if (!isLoggedIn) {
            alert('Please login to submit a review.');
            return;
        }

        if (rating === 0 || newReview.trim() === '') {
            alert("Please select a rating and write a review before submitting.");
            return;
        }

        const newReviewObj = {
            rating,
            text: newReview,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        };

        setReviews([...reviews, newReviewObj]);
        setRating(0);
        setNewReview('');
        console.log('Review submitted successfully!');
    };

    return (
        <div className='row mx-0'>
            <div className='col-md-7 my-4 border px-5 py-4 booking-reviews'>
                <h4>Reviews ({product.reviews.length + reviews.length} reviews)</h4>
                {[...Array(5)].map((_, index) => (
                    <span className='ratingstar'
                        key={index}
                        onClick={() => handleStarClick(index)}
                        style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
                    >
                        &#9733;
                    </span>
                ))}
                <div className='reviews-name'>
                    <input type="text" placeholder='Share your thoughts' value={newReview} onChange={handleReviewChange} />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
                {product.reviews.map((review, index) => {
                    const reviewDate = new Date(review.createdAt);
                    const formattedDate = reviewDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

                    return (
                        <div className='reviews-last border' key={index}>
                            <img src={avatar} alt="avatar" />
                            <b>{review.username}</b>
                            <span>{formattedDate}</span>
                            <p>
                                {review.rating.toFixed(1)}
                                <i className="fa-solid fa-star" style={{ color: "#fa9200", fontSize: '15px' }}></i>
                            </p>
                            <h6>{review.reviewText}</h6>
                        </div>
                    );
                })}

                {reviews.map((review, index) => (
                    <div className='reviews-last border' key={index}>
                        <img src={avatar} alt="avatar" />
                        {userData && userData.data.username && (
                            <b>{userData.data.username}</b>
                        )}
                        <span>{review.date}</span>
                        <p>
                            {review.rating.toFixed(1)}{""}
                            <i className="fa-solid fa-star" style={{ color: "#fa9200", fontSize: '15px' }}></i>
                        </p>
                        <h6>{review.text}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
