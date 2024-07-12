import  { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import "./Slider.css"
const Carousel = () => {
    const board = [
        {
            img:"/images/About/VP.png",
            name:'Viraj  Pathi',
            post:'Founder & CEO'
        },
        {
            img:"/staff/Virupakshi-removebg-preview (1).png",
            name:'Virupakshi',
            post:'VP Engineering (Products)'
        },
        
        {
            img:"/staff/Vimala-removebg-preview (1).png",
            name:'Vimala',
            post:'VP Engineering'
        },
        {
            img:"/staff/Srinivas-removebg-preview.png",
            name:'Srinivas',
            post:'VP Engineering'
        },
        {
            img:"/staff/Sindhu-removebg-preview.png",
            name:'Sindhu',
            post:'VP Engineering'
        },
        {
            img:"/staff/Shaik-removebg-preview.png",
            name:'Shaik',
            post:'VP Engineering'
        },
        {
            img:"/staff/Satish-removebg-preview.png",
            name:'Satish',
            post:'VP Engineering'
        },
        {
            img:"/staff/Nagamani-removebg-preview.png",
            name:'Nagamani',
            post:'VP Engineering'
        },
        // {
        //     img:"/staff/mudda-removebg-preview.png",
        //     name:'',
        //     post:'VP Engineering'
        // },
        // {
        //     img:"/staff/.png",
        //     name:'',
        //     post:'VP Engineering'
        // },
        {
            img:"/staff/Mannar-removebg-preview.png",
            name:'Mannar',
            post:'VP Engineering'
        },
        {
            img:"/staff/J_Hari-removebg-preview (1).png",
            name:'J_Hari',
            post:'VP Engineering'
        },
        {
            img:"/staff/Anitha-removebg-preview.png",
            name:'Anitha',
            post:'VP Engineering'
        },
        {
            img:"/staff/Anil-removebg-preview.png",
            name:'Anil',
            post:'VP Engineering'
        },
    ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = slideRefs.current;

    gsap.set(slides, { x: (i) => i * 100 + '%' });

    const tl = gsap.timeline();

    tl.to(carousel, {
      x: `-${currentIndex * 100}%`,
      duration: 0.5,
      ease: 'power2.out',
    });

    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        gsap.to(slide, { scale: 1, opacity: 1, duration: 0.5 });
      } else {
        gsap.to(slide, { scale: 0.8, opacity: 0.5, duration: 0.5 });
      }
    });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % board.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + board.length) % board.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {board.map((item, index) => (
          <div
            key={index}
            className="carousel-slide"
            ref={(el) => (slideRefs.current[index] = el)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.post}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;