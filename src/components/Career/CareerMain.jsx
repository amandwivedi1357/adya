
import "./Career.css"
import { positionsData } from "..";
import Positions from "./Positions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeUpAnimation from "../../Routes/FadeUp";
export default function CareerMain() {
  const navigate = useNavigate()
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleClick = (route)=>{
      navigate(`/career/${route}`)
  }
  return (
    <div>
       
      <div className="top_main">
            <img className="sol_banner" src="images/Homepage/careerBanner.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Join Our Team 
                </p>
                
               
            </div>
    </div>
       
       
    <div className="mid_cont_1">
    <div className="bred">
                <p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/career')}>Career</span></p>
                </div>
    <div className="top_cont">
            <p className="head_text">
            Positions Open Now
            </p>
            <p className="desc_text">Are you willing to be the change? Create a smarter world? Come join us at Adya and make a difference.</p>
        </div>
         
        {positionsData.map((position, index) => (
                <Positions
                    key={index}
                    data={position}
                    index={index}
                    expandedIndex={expandedIndex}
                    setExpandedIndex={setExpandedIndex}
                />
            ))}

 
    </div>
       
       
    <div className="tab_cont_mob">
        <div className="tabs">
        {
            positionsData.map((data,idx)=>(
                <div key={idx} className="tab" onClick={()=>handleClick(data.postName)}>
                        <div className="in_tab">
                            
                            <p className="tab_text">
                           {data.postName}
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
            ))
        }
      
      </div>
        </div>
         
    </div>
  )
}
