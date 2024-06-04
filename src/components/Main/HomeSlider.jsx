
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 // You can define your own styles for the slider
import "./slider.css"
function MySlider() {
  const slides = [
    {
      image: 'images/Homepage/ban1.png',
      headText: 'Committed to sustainable energy through Adya innovation.',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/ban2.png',
      headText: 'Upgrade your Digital Meters to Smart Prepaid Chekout our AM+',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/ban3.png',
      headText: 'Enabling Sustainable Energy Management Solutions for Utilities, Commercial & Industries sectors',
      descText: 'Adya Smart metering solutions'
    },
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1000
  };

  return (
    <Slider {...settings}>
      <div className="banner">
        <div className="image">
          <img className="outer" src="images/Homepage/ban1.png" />
        </div>
        <div className="inner_container">
          <p className="head_text">
            Committed to sustainable energy through Adya innovation.
          </p>
          <p className="desc_text">Adya Smart metering solutions</p>
          <button className="contact_btn">Contact Us</button>
        </div>
      </div>
      <div className="banner">
        <div className="image">
          <img className="outer" src="images/Homepage/ban2.png" />
        </div>
        <div className="inner_container">
          <p className="head_text">
            Committed to sustainable energy through Adya innovation.
          </p>
          <p className="desc_text">Adya Smart metering solutions</p>
          <button className="contact_btn">Contact Us</button>
        </div>
      </div>
      <div className="banner">
        <div className="image">
          <img className="outer" src="images/Homepage/ban3.png" />
        </div>
        <div className="inner_container">
          <p className="head_text">
            Committed to sustainable energy through Adya innovation.
          </p>
          <p className="desc_text">Adya Smart metering solutions</p>
          <button className="contact_btn">Contact Us</button>
        </div>
      </div>
    </Slider>
  );
}

export default MySlider;
