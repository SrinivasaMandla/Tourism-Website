import Slider from 'react-slick';
import '../Assets/CSS/ClientAbout.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../Assets/Images/ava-1.jpg";
import img2 from "../Assets/Images/ava-2.jpg";
import img3 from "../Assets/Images/ava-3.jpg";

function ClientsAbout() {

    const data = [
        {
            id: 1,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img1
        },
        {
            id: 2,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img2
        },
        {
            id: 3,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img3
        },
        {
            id: 4,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img3
        },
        {
            id: 5,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img1
        },
        {
            id: 6,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img2
        },
        {
            id: 7,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img2
        },
        {
            id: 8,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img1
        },
        {
            id: 9,
            name: "jhon deo",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla dolore quibusdam? Commodi consectetur repellat, voluptas quaerat error eius amet, suscipit aperiam quibusdam ratione enim vero, nam doloribus aut et!',
            images: img3
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className='container clientSliders my-5'>
                <button>Clients love</button>
                <h3>What our clients say about us</h3>
                <Slider {...settings}>
                    {data.map((client,index) => (
                        <div className='px-3 my-2' key={index}>
                            <div className='clientSlide' >
                                <p>{client.desc}</p>
                            </div>
                            <div className='client-Slide1 mb-4'>
                                <img src={client.images} alt="Slide 1" />
                                <span><h5 style={{ position: 'relative', top: '6px' }}>{client.name}</h5> Customer</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default ClientsAbout;
