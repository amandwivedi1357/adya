
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 // You can define your own styles for the slider
import "./slider.css"

import { useEffect, useRef, useState } from 'react';
function MySlider() {
  const slides = [
    {
      image: 'images/Homepage/slide1.webp',
      headText: 'India’s only indegenious end-to-end energy monitoring and management solution',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid2.webp',
      headText: 'Adya uses advanced technology to enhance energy efficiency and cut costs',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid3.webp',
      headText: 'Our products are designed for long-lasting, consistent performance and ensure precise billing for fair energy charges',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid4.webp',
      headText: 'Our advanced data analytics offer actionable insights, empowering customers to make informed energy decisions while keeping the customer data protected and secure',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid5.webp',
      headText: 'We provide flexible solutions for residential, commercial, and industrial customers with easy-to-use mobile apps for real-time energy monitoring and payments',
      
      descText: 'Adya Smart metering solutions'
    },
    // {
    //   image: 'images/Homepage/slid6.webp',
    //   headText: ''
    // },
    {
      image: 'images/Homepage/slid7.webp',
      headText: 'Our solutions help customers manage and reduce their energy expenses'
    },
    
  ];
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
      sliderRef.current.slickGoTo(nextSlide);
    }, 6000); // 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide, slides.length]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
   
  };
  // const slidesData = [
  //   { id:1,component: <Slide1 /> },
  //   { id:2,component: <Slide2 /> },  
  //   { id:3,component: <Slide3 /> },  
  // ];
  return (
    <Slider {...settings} ref={sliderRef}>
      {slides.map((data,idx)=>(
         <div key={idx} className="hero_Section">
         <img className="sol_banner" src={data.image}/>
         <div className="inner_container">
             <p className="head_text">
                 {data.headText}
             </p>
             
         </div>
         </div>
      ))}
    
    </Slider>
    // <div>
    // <Slider {...settings}>
    //   {slidesData.map((component) => (
    //     <div className="" key={component.id}>{component.component}</div>
    //   ))}
    // </Slider>
    // </div>
  );
}

export default MySlider;
