import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slider.css";

function MySlider() {
  const slides = [
    {
      image: 'images/Homepage/slide1.webp',
      headText: 'India’s only indigenous end-to-end energy monitoring and management solution',
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
    {
      image: 'images/Homepage/slid7.webp',
      headText: 'Our solutions help customers manage and reduce their energy expenses'
    },
  ];

  const settings = {
    dots: false,
    infinite: true, // Enables continuous looping of slides
    speed: 2000, // Speed of the slide transition
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 6000, // Delay between each slide transition
  };

  return (
    <Slider {...settings}>
      {slides.map((data, idx) => (
        <div key={idx} className="hero_Section">
          <img className="sol_banner" src={data.image} alt={`Slide ${idx + 1}`} />
          <div className="inner_container">
            <p className="head_text">
              {data.headText}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default MySlider;
