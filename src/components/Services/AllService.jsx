import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { card1_services } from "..";
import FadeUpAnimation from "../../Routes/FadeUp";


export default function AllService() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState();
    const handleClick = (route)=>{
        navigate(`/${route}`)
    }
  return (
    <FadeUpAnimation>
    <div className='allService_Container'>

       

        <div className="top_main">
             <img loading='lazy' className="sol_banner" src="/images/Services/orig-banner.jpg" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Services 
                </p>
                
            </div>
    </div> 
       
     
    <FadeUpAnimation>
    <div className="sector_2">
        <div className="sector_2_inner">
    <div className="bred">

               
<p><span onClick={()=>navigate('/')}>Home</span> / <span onClick={()=>navigate('/services')}>Services</span></p>
</div>
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
                       <img loading='lazy' className="link_img" src={isHovered === idx ? data.hover : data.img} alt="" />
                      <p className="link_text">{data.head}</p>
                    </div>
                    <p className="arrow-right">→</p>
                  </div>
                  ))
                }
              </div>
            </div>
      </div>
      </FadeUpAnimation>
    </div>
    </FadeUpAnimation>
  )
}
