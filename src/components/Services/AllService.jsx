import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { card1_services } from "..";


export default function AllService() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState();
    const handleClick = (route)=>{
        navigate(`/${route}`)
    }
  return (
    <div className='allService_Container'>
        <div className="top_main">
            <img className="sol_banner" src="images/Services/ServiceBanner.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Services 
                </p>
                <div className="bred">

                <img src="/images/Homepage/Home.svg" alt="" />
                <p><span onClick={()=>navigate('/')}>Home</span> / <span onClick={()=>navigate('/services')}>Services</span></p>
                </div>
            </div>
    </div> 
    <div className="sector_2">
        <div className="sector_2_inner">
            <p className="head_text">
            Services We Offer
            </p>
            <p className="desc_text">
            Our services cater to a diverse range of sectors that benefit from the <br /> implementation of our cutting-edge energy management systems.

            </p>
        </div>
        <div className="sols_links">
              <p className="head_text">
                List of Sectors
              </p>
              <div className="links">
                {
                  card1_services.map((data,idx)=>(
                    <div className="single_link" key={idx} onClick={()=>navigate(`/services/${data.head}`)} onMouseEnter={() => setIsHovered(idx)}
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
    </div>
  )
}
