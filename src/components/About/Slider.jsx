import React, { useRef, useEffect, useState } from "react";
import "./Slider.css";
import { gsap } from "gsap";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
const Carousel = () => {
    const board = [
        { img: "/images/About/VP.png", name: 'Viraj Pathi', post: 'Founder & CEO' },
        { img: "/staff/Virupakshi-removebg-preview (1).png", name: 'Virupakshi', post: 'VP Engineering (Products)' },
        { img: "/staff/Vimala-removebg-preview (1).png", name: 'Vimala', post: 'VP Engineering' },
        { img: "/staff/Srinivas-removebg-preview.png", name: 'Srinivas', post: 'VP Engineering' },
        { img: "/staff/Sindhu-removebg-preview.png", name: 'Sindhu', post: 'VP Engineering' },
        { img: "/staff/Shaik-removebg-preview.png", name: 'Shaik', post: 'VP Engineering' },
        { img: "/staff/Satish-removebg-preview.png", name: 'Satish', post: 'VP Engineering' },
        { img: "/staff/Nagamani-removebg-preview.png", name: 'Nagamani', post: 'VP Engineering' },
        { img: "/staff/Mannar-removebg-preview.png", name: 'Mannar', post: 'VP Engineering' },
        { img: "/staff/J_Hari-removebg-preview (1).png", name: 'J_Hari', post: 'VP Engineering' },
        { img: "/staff/Anitha-removebg-preview.png", name: 'Anitha', post: 'VP Engineering' },
        { img: "/staff/Anil-removebg-preview.png", name: 'Anil', post: 'VP Engineering' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        gsap.to(carousel, { x: `-${currentIndex * 100}%`, duration: 1, ease: "power3.inOut" });
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? board.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === board.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
  };
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" ref={carouselRef}>
                {board.map((member, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.post}</p>
                    </div>
                ))}
            </div>
            <button className="carousel-button prev" onClick={prevSlide}><FaArrowLeftLong/></button>
            <button className="carousel-button next" onClick={nextSlide}><FaArrowRightLong/></button>
            <div className="carousel-indicators">
                {board.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
