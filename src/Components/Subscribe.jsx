import React from 'react';
import maleTourist from '../Assets/Images/male-tourist.png'

function Subscribe() {
    return (
        <>
        <div className='subscribe  mb-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5 px-5 subscribe-left">
                        <h4>Subscribe now for usefull travelling information.</h4>
                        <div className='subscribe-left1 py-1'>
                            <input type="email" placeholder='Enter your email'/>
                            <button className='btn  text-white'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis adipisci ea dolores, blanditiis ipsa saepe?</p>
                    </div>
                    <div className="col-md-6 subscribe-right">
                        <img src={maleTourist} alt="Male-Tourist"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Subscribe;