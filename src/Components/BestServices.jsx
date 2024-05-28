import React from 'react';
import weather from '../Assets/Images/weather.png'
import guide from '../Assets/Images/guide.png'
import customization from '../Assets/Images/customization.png'
import '../Assets/CSS/Style.css'

function BestServices() {


    return (
        <>
            <div className="container my-5">
                <div className="row Best-service ">
                    <div className="col-md-3 serice-card1">
                        <p>What we serve</p>
                        <h3>We offer our <br/> best services</h3>
                    </div>
                    <div className="col-md-3 service-card">
                        <img src={weather} alt="" />
                        <h6>Calculate weather</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod provident corporis tempore, omnis vel aut!</p>
                    </div>
                    <div className="col-md-3 service-card">
                            <img src={guide} alt="" />
                        <h6>Best our guide</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod provident corporis tempore, omnis vel aut!</p>
                    </div>
                    <div className="col-md-3 service-card">
                        <img src={customization} alt="" width='100%'/>
                        <h6>Customization</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod provident corporis tempore, omnis vel aut!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestServices;