import  { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slider.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

function MySlider() {
  const sliderRef = useRef(null); // Create a ref to access the slider's methods

  const slides = [
    {
      image: 'images/Homepage/slide1.webp',
      headText: 'End-to-End smart metering solution provider for Power Distribution Companies and Consumers',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid2.webp',
      headText: 'Our products are designed for long-lasting, high accuracy and consistent performance',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid3.webp',
      headText: 'Our advanced data analytics offer actionable insights, empowering all stakeholders to make informed decisions',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid4.webp',
      headText: 'Upgrade your existing digital meter to a smart meter using our Digi2Smart (™) IoT plug-in device ',
      descText: 'Adya Smart metering solutions'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Navigate to the previous slide
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Navigate to the next slide
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((data, idx) => (
          <div key={idx} className="hero_Section">
            <img className="sol_banner_home" src={data.image} alt={`Slide ${idx + 1}`} />
            <div className="inner_container_home">
              <p className="head_text">{data.headText}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className='controls'>
        <div className='nav-icons' onClick={handlePrev}>
          <FaLongArrowAltLeft color='#fff' />
        </div>
        <div className='nav-icons' onClick={handleNext}>
          <FaLongArrowAltRight color='#fff' />
        </div>
      </div>
    </div>
  );
}

export default MySlider;
