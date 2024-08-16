import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./test.css"

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const testimonial = [
        {
            detail:"We are Immensely satisfied and delighted on the Installation, Commissioning of end to end smart meter project awarded to ADYA Smart Metering Pvt. Ltd., We also hereby certify that the plug & play project was delivered to our satisfactory levels.",
            customer:"-APSPDCL (Andhra Pradesh State <br /> Power Distribution Corporation Ltd.)"
        },
        {
            detail:"It is intimated that M/S. Adya Smart Metering Pvt. Ltd. has completed Supply, Installation, Testing and Commissioning of 500 Smart Energy Meters in ICF North Colony along Mobile Application. The above work is completed	and found Satisfactory.",
            customer:"ICF (Integral Coach Factory)"
        },
        {
            detail: "Adya Smart Metering Pvt. Ltd. has successfully completed the Demo/ POC for Tamil Nadu Urban Finance & Infrastructure Development Company (TUFIDCO). Adya Smart Metering Pvt. Ltd. has successfully demonstrated the Smart Energy Meter Functionality with Single Phase Meter (ASM-201) with GSM Communication Module as per AMI System.",
            customer:"L&T (Larsen and Toubro)"
        },
        {
            detail:"Adya has indigenously designed a cost-effective wireless solution called “Time Lite” using its Unique Products called “LumiCon” and “LiteCon”. Time Lite is a centralized automation and energy saving solution meeting global standards for large quantum of Street Lights for increasing the Operational Efficiency, reduction in energy Consumption and maintenance of Bills",
            customer:"GHMC (Greater Hyderabad Municipal Corporation)"
        },
        {
            detail:"The Project is Satisfactorily completed, and the deliverables have been met for conducting Pilot Program and Malkajgiri, Secunderabad, AP",
            customer:"CPDCL (Central Power Distribution Corporation Ltd.)"
        },
       
    ]

  return (
    <Slider {...settings} className="testimonial-slider">

   {
   testimonial.map((item, index) => (

    <div className="mid_cont_6" key={index}>
    <div className="left">
    <div className="top_cont">
        <p className="head_text">
        Our Trusted Client Stories
        </p>
        <p className="desc_text">Empowering Journeys, Empowered Words</p>
    </div>
    {/* <img src="images/Homepage/test.png" alt="" className="mid_m_6"/> */}
    {/* <img src="images/Homepage/quote.svg" alt="quote" className="quote"/> */}
    <div className="testimonial">
        <p>{item.detail}</p>
        <p className="desc_text_2">
    {item.customer}
    </p>
    </div>
    
  </div>
  {/* <div className="right">
        <img src="images/Homepage/mid_66.png" alt="" />
    </div> */}
    </div>
   ))}
        </Slider>
  )
}

export default Testimonials