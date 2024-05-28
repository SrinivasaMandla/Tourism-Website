import React from 'react';
import '../Assets/CSS/Style.css'

import World from '../Assets/Images/world.png'
import Her_1 from '../Assets/Images/hero-img01.jpg'
import Her_2 from '../Assets/Images/hero-img02.jpg';
import Her_3 from '../Assets/Images/hero-video.mp4';

function TravellingFirst() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div className='first-left'>
                            <span>Know before you go</span>
                            <img src={World} alt="" className='img-fluid p-1' width='40px' />
                        </div>
                        <div className='first-left-p'>
                            <h1>Travelling opens the doors to creating <span className='text-warning'>memories</span></h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, minima atque, cum at vero est adipisci labore aperiam fugiat explicabo libero placeat nemo veniam doloribus beatae praesentium aliquid ducimus, iusto hic corrupti reprehenderit numquam.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='first-images mt-3 '>
                            <div className='me-3' >
                                <img src={Her_1} alt="" className='img-fluid' />
                            </div>
                            <div className='me-3 mt-4' >
                                <video src={Her_3} controls >
                                </video>
                            </div>
                            <div className='mt-4 pt-4 me-3' >
                                <img src={Her_2} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TravellingFirst;