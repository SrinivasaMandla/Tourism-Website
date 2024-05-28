import React from 'react';
import experience from '../Assets/Images/experience.png'

function ExperienceServe() {
    return (
        <>
            <div className="container pb-3" style={{marginTop:'6em'}}>
                <div className="row mb-5">
                    <div className="col-md-6 pe-5 py-2">
                        <div className="experience-left">
                            <p><i>Experience</i></p>
                            <h4>With our all experience <br />We will serve you</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, in ullam harum magni ad necessitatibus.</p>
                            <div className='experience-rating px-4'>
                                <div>
                                    <p><span>12k+</span></p>
                                    <p>Successfull Trips</p>
                                </div>
                                <div>
                                    <p><span>2k+</span></p>
                                    <p>Regular clients</p>
                                </div>
                                <div>
                                    <p><span>10</span></p>
                                    <p>Years experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 py-5 ps-0" style={{paddingRight:'5em'}}>
                        <img src={experience} alt="" width='100%' height='300px'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ExperienceServe;