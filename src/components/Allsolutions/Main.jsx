
import { useState } from "react";
import { cards1_AllSolutions } from ".."
import "./Main.css"
import { useNavigate } from "react-router-dom";
import FadeUpAnimation from "../../Routes/FadeUp";
import useCoolPageTransition from "../hooks/useCoolPageTransition";
export default function Main() {
    // useCoolPageTransition()
    const [isHovered5, setIsHovered5] = useState(false);
   
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState();
    const handleClick = (route)=>{
        navigate(`/${route}`)
    }
  return (
    <FadeUpAnimation>

    
    <div>
         

        <div className="top_main">
             <img loading='lazy' className="sol_banner" src="images/Homepage/singl_sol1.jpg" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Solutions 
                </p>
               
               
            </div>
        </div>
         
         
    <FadeUpAnimation>
       <div className="mid_cont_1">
       <div className="bred">
                <p onClick={()=>navigate('/')}>Home{" > "}Solutions</p>
                </div>
        <div className="top_cont">
            <p className="head_text">
            Solutions We Offer
            </p>
            <p className="desc_text">Seamlessly integrated, easy to rollout and cost effective solution which impacts business.</p>
        </div>

        <div className="cards_container_11">
            {cards1_AllSolutions.map((data,idx)=>(
                <div onClick={()=>handleClick(data.head)} className="card" key={idx}   onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}>
                     <img loading='lazy' src={isHovered === idx ? data.hover : data.img} alt="" className="card_vect" />
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
         
      </FadeUpAnimation> 

        <FadeUpAnimation>

        
      <div className="tab_cont_mob">
        <div className="tabs">
        {
            cards1_AllSolutions.map((data,idx)=>(
                <div key={idx} className="tab" onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)} onClick={()=>handleClick(data.head)}>
                        <div className="in_tab">
                             <img loading='lazy' src={
                      isHovered5
                        ? "images/Homepage/energy_fff.svg"
                        : data.img
                    }  alt="" />
                            <p className="tab_text">
                           {data.head}
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
            ))
        }
      
      </div>
        </div>
        </FadeUpAnimation> 
    </div>
    </FadeUpAnimation>
  )
}
