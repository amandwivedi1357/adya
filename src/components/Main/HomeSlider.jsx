
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 // You can define your own styles for the slider
import "./slider.css"
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
function MySlider() {
  const slides = [
    {
      image: 'images/Homepage/slid1.png',
      headText: 'Committed to sustainable energy through Adya innovation.',
      descText: 'Adya Smart metering solutions'
    },
    {
      image: 'images/Homepage/slid2.png',
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
    //  autoplaySpeed: 1000
  };
  const slidesData = [
    { id:1,component: <Slide1 /> },
    { id:2,component: <Slide2 /> },  
    { id:3,component: <Slide3 /> },  
  ];
  return (
    // <Slider {...settings}>
    //   {slides.map((data,idx)=>(
    //      <div key={idx} className="hero_Section">
    //      <img className="sol_banner" src={data.image}/>
    //      <div className="inner_container">
    //          <p className="head_text">
    //              {data.headText}
    //          </p>
    //          <p className="desc_text">{data.descText}</p>
    //          <button className="contact_btn">Contact Us</button>
    //      </div>
    //      </div>
    //   ))}
    
    // </Slider>
    <div>
    <Slider {...settings}>
      {slidesData.map((component) => (
        <div className="" key={component.id}>{component.component}</div>
      ))}
    </Slider>
    </div>
  );
}

export default MySlider;
