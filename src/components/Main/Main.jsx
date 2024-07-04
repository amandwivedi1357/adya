import { useRef, useState } from "react";
import { cards1_Sectors, cards1_data, cards2_data, listData } from "../index";

import "./Main.css";
import { Box } from "@chakra-ui/react";
import MySlider from "./HomeSlider";
import SolutionsSlider from "../Sliders/SolutionsSlider";
import ProductsSlider from "../Sliders/ProductsSlider";
import { useNavigate } from "react-router-dom";
import { ReactTyped, } from "react-typed";
import RespNav from "../Responsive/RespNav";

export default function Main() {
  const text1 = 'Committed to sustainable energy through Adya innovation'
  const text2 = 'Upgrade your Digital Meters to Smart Prepaid Checkout our AM+'
  const text3 = 'Enabling Sustainable Energy Management Solutions for Utilities, Commercial & Industries sectors'

  const desc1 = 'Adya Smart Metering Solutions'
  const videoRef = useRef()
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const [isHovered7, setIsHovered7] = useState(false);
    const [isHovered8, setIsHovered8] = useState(false);
    const [typed,setTyped] = useState()

    const img = [{img:'img1'},{img:'img2'},{img:'img3'},{img:'img4'},{img:'img5'},{img:'img6'},{img:'img7'},{img:'img8'},{img:'img9'},{img:'img10'}]
    
  return (
    <div className="red_home">

<div className="hero_Section">
  <div className="blend_nav">
  <div className="navbar">
        <div className="navbar_div" style={{cursor:'pointer'}} onClick={()=>navigate('/')}>
          <img  src="/images/Homepage/logo.svg" alt="" className="logo"/>
          <div>
          <span className="Advanced-Energy-Management">
  Advanced{" "}
  <span className="text-style-1">Energy{" "}</span>
  Management
</span>
</div>
        </div>
        
        <div className='nav_list'>
  <ul className='navlist_ul'>
    
    
  <li onClick={()=>navigate('/all-solutions')}>Solutions</li>
    <li onClick={()=>navigate('/sector')}>Sectors</li>
    <li onClick={()=>navigate('/products')}>Products</li>
    <li onClick={()=>navigate('/services')}>Service</li>
    <li onClick={()=>navigate('/partners')}>Partners</li>
    <li onClick={()=>navigate('/about-us')}>About us</li>
    <li onClick={()=>navigate('/career')}>Career</li>
  </ul>
</div>
      <div className="respnav">
        <RespNav/>
      </div>
        

        <div className='search'>
          <button  onClick={()=>navigate('/contact-us')}>

       Contact us
          </button>

        </div>
      </div>
  </div>
            {/* <img className="sol_banner" src="images/Homepage/ban1.png" />
            <div className="inner_container">
                <p className="head_text">
                    Enabling Sustainable Energy Management Solutions for Utilities, Commercial & Industries sectors.
                </p>
                <p className="desc_text">Adya Smart metering solutions</p>
                <button className="contact_btn">Contact Us</button>
            </div> */}

            <video className="video_height" ref={videoRef} autoPlay loop muted>
                <source src="/videos/homeVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="animated_text">
            <ReactTyped
             typedRef={setTyped}
      strings={[
        text1,text2,text3
      ]}
      typeSpeed={50}
      backSpeed={80}
      
      loop
    />
    <p className="desc_text">
      {desc1}
    </p>
            </div>
        </div>


     {/* <div className="banner">
   
    
</div> */}

      {/* <MySlider/> */}
      <div className="mid_cont_1">
        <div className="top_cont">
            <p className="head_text">
            Solutions We Offer
            </p>
            <p  className="desc_text">Seamlessly integrated, easy to rollout and cost effective solution <br /> which impacts business.</p>
        </div>

        <div className="cards_container_11">
            {cards1_data.map((data,idx)=>(
                <div className="card" key={idx} onClick={()=>navigate(data.head)}   onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}>
                    <img src={isHovered === idx ? data.hover : data.img} alt="" className="card_vect" />
                    <div className="redd" style={{display:"flex"}}>
                    <p className="head_text">
                        {data.head}{" "}
                        
                    </p>
                    <span className="follow-up">{data?.followUp}</span>
                    </div>
                    <p className="desc_text">{data.desc}</p>

                    <p className="explore">Explore{"    "}  <span style={{marginLeft:"1rem"}}>→</span></p>
                </div>
            ))}
        </div>
      </div>
      <div className="solutions_Slider">
        <SolutionsSlider/>
      </div>
      <div className="mid_cont_2">
        <div className="left">
            <div className="left_content">
                <p className="head_text">
                Services We Offer
                </p>
                <p className="desc_text">
                Our services help utilities, solution providers and system integrators to rollout projects faster and cost effectively.
                </p>
                <img src="/images/Homepage/api.png" className="mid_2_mob" alt="" />
                <div className="tabs">
                    <div onClick={()=>navigate(`services/Business Consulting`)} className="tab" onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}>
                        <div className="in_tab" >
                            <img 
                             src={
                      isHovered1
                        ? "/images/Homepage/Bs_consulting_fff.svg"
                        : "/images/Homepage/BS_consulting.svg"
                    } 
                    // src='images/Homepage/BS_consulting.svg'
                    alt="" />
                            <p className="tab_text">
                            Business Consulting
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                    <div onClick={()=>navigate(`services/Testing`)} className="tab" onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}>
                        <div className="in_tab">
                            <img  src={
                      isHovered2
                        ? "/images/Homepage/test_fff.svg"
                        : "/images/Homepage/test.svg"
                    }  alt="" />
                            <p className="tab_text">
                            Testing
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                    <div onClick={()=>navigate(`services/System Integrations`)} className="tab" onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}>
                        <div className="in_tab">
                            <img src={
                      isHovered3
                        ? "/images/Homepage/system_integ_fff.svg"
                        : "/images/Homepage/system_integ.svg"
                    }  alt="" />
                            <p className="tab_text">
                            System Integrations
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                    <div onClick={()=>navigate(`services/API `)} className="tab" onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}>
                        <div className="in_tab">
                            <img src={
                      isHovered4
                        ? "/images/Homepage/d1_fff.svg"
                        : "/images/Homepage/d1.svg"
                    }  alt="" />
                            <p className="tab_text">
                            API ( Application Programming Interface )
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <img  src="/images/Homepage/api_2.png" alt="" />
        </div>
      </div>
      <div className="mid_cont_3">
      <div className="top_cont">
            <p className="head_text">
            Products We Offer
            </p>
            <p style={{marginBottom:'68px'}} className="desc_text">Enabling collection of high quality data for AMI 2.0 rollouts.</p>
        </div> 
        <div className="cards_container_11">
            {cards2_data.map((data,idx)=>(
                <div className="card" key={idx} onMouseEnter={() => setIsHovered(idx)} onClick={()=>navigate(data.route)}
                onMouseLeave={() => setIsHovered(null)}>
                   <img src={isHovered === idx ? data.hover : data.img} alt="" className="card_vect"/>
                    <div className="redd" style={{display:"flex"}}>
                    <p className="head_text">
                        {data.head}{" "}
                        
                    </p>
                    <span className="follow-up">{data?.followUp}</span>
                    </div>
                    <p className="desc_text">{data.desc}</p>

                    <p className="explore">Explore{"    "}  <span style={{marginLeft:"1rem"}}>→</span></p>
                </div>
            ))}
        </div>
      </div>
      <div className="solutions_Slider">
        <ProductsSlider item={cards2_data}/>
      </div>
      <div className="mid_cont_4">
      <div className="left left4">
            <img src="/images/Homepage/sectorss.jpeg" alt="" />
        </div>
      <div className="right">
            <div className="right_content">
                <p className="head_text">
                Sectors We Serve
                </p>
                <img src="/images/Homepage/mid_4_m.png" className="mid_2_mob" alt="" />
                <p className="desc_text">
                Our services cater to a diverse range of sectors that benefit from the implementation of our cutting-edge energy management systems.
                </p>
                
                <div className="tabs">
                    <div className="tab" onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}>
                        <div className="in_tab">
                            <img src={
                      isHovered5
                        ? "images/Homepage/energy_fff.svg"
                        : "images/Homepage/energy.svg"
                    }  alt="" />
                            <p className="tab_text">
                           Energy & Utilities 
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                    <div className="tab" onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}>
                        <div className="in_tab">
                            <img src={
                      isHovered6
                        ? "images/Homepage/industrial_fff.svg"
                        : "images/Homepage/industrial.svg"
                    }  alt="" />
                            <p className="tab_text">
                            Industrial Sector
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                    <div className="tab" onMouseEnter={() => setIsHovered7(true)}
                onMouseLeave={() => setIsHovered7(false)}>
                        <div className="in_tab">
                            <img src={
                      isHovered7
                        ? "images/Homepage/commerce_fff.svg"
                        : "images/Homepage/commerce.svg"
                    }  alt="" />
                            <p className="tab_text">
                            Commercial Sector
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                    <div className="tab" onMouseEnter={() => setIsHovered8(true)}
                onMouseLeave={() => setIsHovered8(false)}>
                        <div className="in_tab">
                            <img src={
                      isHovered8
                        ? "images/Homepage/resident.svg"
                        : "images/Homepage/resident_e.svg"
                    }  alt="" />
                            <p className="tab_text">
                            Residential Sector
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
      <div className="sectors_mob">
      <div className="sols_links">
             
              <div className="links">
                {
                  cards1_Sectors.map((data,idx)=>(
                    <div className="single_link" key={idx} onClick={()=>navigate(`/sector/${data.route}`)} onMouseEnter={() => setIsHovered(idx)}
                    onMouseLeave={() => setIsHovered(null)}>
                    <div className="inner">
                      <img className="link_img" src={isHovered === idx ? data.hover : data.img} alt="" />
                      <p className="link_text">{data.head}</p>
                    </div>
                    <p className="arrow-right">→</p>
                  </div>
                  ))
                }
              </div>
            </div>
      </div>
      <div className="mid_cont_5">
      <div className="top_cont">
            <p className="head_text">
            Why Our Customers <br /> Choose  Working With Us
            </p>
            <p className="desc_text">Adya empowers you and your community to control your energy <br /> generation and payments.</p>
        </div>
        <div className="bottom_cont">
            {
                listData.map((data,idx)=>(
                    <div key={idx} className="single_list">
                        <div className="head">
                            <div className="eclipse"></div>
                            <p className="head_text">
                                {data.head}
                            </p>
                        </div>
                        <p className="desc_text">
                            {data.desc}
                        </p>
                    </div>
                ))
            }
        </div>
        <button className="contact_btn">Contact us</button>
      </div>
      <div className="mid_cont_6">
        <div className="left">
        <div className="top_cont">
            <p className="head_text">
            Our Trusted Client Stories
            </p>
            <p className="desc_text">Empowering Journeys, Empowered Words</p>
        </div>
        <img src="images/Homepage/test.png" alt="" className="mid_m_6"/>
        <img src="images/Homepage/quote.svg" alt="quote" className="quote"/>
        <div className="testimonial">
            <p>We are Immensely satisfied and delighted on the Installation, Commissioning of end to end smart meter project awarded to ADYA Smart Metering Pvt. Ltd., We also hereby certify that the plug & play project was delivered to our satisfactory levels.</p>
            <p className="desc_text_2">
        -APSPDCL (Andhra Pradesh State <br /> Power Distribution Corporation Ltd.)
        </p>
        </div>
        
      </div>
      <div className="right">
            <img src="images/Homepage/mid_66.png" alt="" />
        </div>
        </div>
        
        <div className="marquee_container">
      <div className="marquee">
        <div className="marquee__group">
          {img.map((data, idx) => (
            <img
              src={`images/Homepage/${data.img}.png`}
              className="marquee__image"
              key={idx}
              alt=""
            />
          ))}
        </div>
        <div className="marquee__group">
          {img.map((data, idx) => (
            <img
              src={`images/Homepage/${data.img}.png`}
              className="marquee__image"
              key={idx + img.length}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
