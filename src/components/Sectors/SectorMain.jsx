import { useState } from "react";
import { cards1_Sectors } from ".."
import "./index.css"
import { useNavigate } from "react-router-dom";
import FadeUpAnimation from "../../Routes/FadeUp";
export default function SectorMain() {
    const [isHovered, setIsHovered] = useState();
    const navigate = useNavigate()
  return (
    <FadeUpAnimation>
    <div className="sector_container">
       

       <div className="top_main">
         <img loading='lazy' className="sol_banner" src="images/Homepage/sector_banner1.jpg" alt="" />
        <div className="img_cont">
          <p className="head_text">Sectors</p>
          
        </div>
      </div>
       
       
    <FadeUpAnimation>
      <div className="sector_2">
        
        <div className="sector_2_inner">
        <div className="bred">
             
             <p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/sector')}>Sectors</span></p>
           </div>
            <p className="head_text">
            Sectors We Offer
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
                  cards1_Sectors.map((data,idx)=>(
                    <div className="single_link" key={idx} onClick={()=>navigate(`/sector/${data.route}`)} onMouseEnter={() => setIsHovered(idx)}
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
