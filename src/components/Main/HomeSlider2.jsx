/* eslint-disable react/no-unescaped-entities */
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./test.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 cards per slide
        slidesToScroll: 2, // Scroll 2 cards at a time
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonial = [
        {
            detail:(<>We are Immensely satisfied and delighted on the Installation, Commissioning of end to end smart meter project awarded to ADYA Smart Metering Pvt. Ltd.<br /> We also hereby certify that the plug & play project was delivered to our satisfactory levels.</>),
            customer:"-APSPDCL (Andhra Pradesh State <br /> Power Distribution Corporation Ltd.)"
        },
        {
            detail:(<>It is intimated that M/S. Adya Smart Metering Pvt. Ltd. has completed Supply, Installation, Testing and Commissioning of 500 Smart Energy Meters in ICF North Colony along Mobile Application. The above work is completed and found Satisfactory.</>),
            customer:"ICF (Integral Coach Factory)"
        },
        {
            detail: (<>Adya Smart Metering Pvt. Ltd. has successfully completed the Demo/ POC for Tamil Nadu Urban Finance & Infrastructure Development Company (TUFIDCO).<br /> Adya Smart Metering Pvt. Ltd. has successfully demonstrated the Smart Energy Meter Functionality with Single Phase Meter (ASM-201) with GSM Communication Module as per AMI System.</>),
            customer:"L&T (Larsen and Toubro)"
        },
        {
            detail:(<>Adya has indigenously designed a cost-effective wireless solution called “Time Lite” using its Unique Products called “LumiCon” and “LiteCon”.
            <br /><br /> Time Lite is a centralized automation and energy saving solution meeting global standards for large quantum of Street Lights for increasing the Operational Efficiency, reduction in energy Consumption and maintenance of Bills.</>),
            customer:"GHMC (Greater Hyderabad Municipal Corporation)"
        },
        {
            detail:(<>The Project is Satisfactorily completed, and the deliverables have been met for conducting Pilot Program and Malkajgiri, Secunderabad, AP.</>),
            customer:"CPDCL (Central Power Distribution Corporation Ltd.)"
        },
    ];

    return (
        <div className='test-slider-cont'>
            <div className="top-cont">
                <p className="head-text-client">
                    Our Trusted Client Stories
                </p>
                <p className="desc-text">Empowering Journeys, Empowered Words</p>
            </div>
       
            <Slider {...settings} className="testimonial-slider">
                {testimonial.map((item, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-content">
                            <p className="testimonial-detail">{item.detail}</p>
                            <p className="testimonial-customer" dangerouslySetInnerHTML={{__html: item.customer}} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonials;
