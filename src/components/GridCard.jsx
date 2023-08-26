import React, { useEffect, useState } from 'react'
import logo from '../images/logo.jpg'
import one from '../images/two.jpg'
import two from '../images/three.jpg'
import third from '../images/three.jpg'
import fourth from '../images/four.jpg'

import { Link } from 'react-router-dom'

const fakeData = [
    {
        title: "Book Appointment",
        description: "Book a new Appointment",
        button: "Book Appointment",
        Link : '/bookappointment',
    },
    {
        title: "Current Appointments",
        description: "Review your Appointments",
        button: "Current Appointment",
        Link: '/currentappointment'
    },
    {
        title: "Records",
        description: "Check your Past Records",
        button: "Records",
        Link: '/records'
    },
    {
        title: "Contact Us",
        description: "May I Help you ?",
        button: "Contact Us",
        Link: '/contactus'
    }
]

const GridCard = () => {

    const slides = [
        one, two, third, fourth
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };



    return (
        <div>
            <div className="carousel w-full flex h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item relative w-full ${index === currentSlide ? 'visible' : 'hidden'}`}
                    >
                        <img src={slide} className="w-full h-96 px-2 rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)} className="btn btn-circle">❮</button>
                            <button onClick={() => goToSlide((currentSlide + 1) % slides.length)} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full flex items-center justify-center'>
                <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">

                    {
                        fakeData.map((elem) => (
                            <div className="card w-80   bg-base-100 shadow-xl image-full relative mt-10">
                                <figure><img src={logo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{elem.title}</h2>
                                    <p>{elem.description}</p>
                                    <div className="card-actions justify-center  relative top-3">
                                        <Link to ={elem.Link}>
                                        <button className="btn bg-green-500 text-white hover:bg-green-400 border-none ">{elem.button}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default GridCard
