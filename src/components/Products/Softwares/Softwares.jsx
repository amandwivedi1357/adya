import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { useState } from "react";
import { Software } from "..";
import Footer from "../../Footer/Footer";



export default function Softwares() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState();
    const handleClick = (route)=>{
        navigate(`/${route}`)
    }
  return (
    <div>
       <Navbar/>
      <div className="top_main">
            <img className="sol_banner" src="images/Homepage/careerBanner.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Softwares 
                </p>
                <div className="bred">

                <img src="images/Homepage/Home.svg" alt="" />
                <p>Home/Softwares</p>
                </div>
            </div>
    </div>
    <div className="mid_cont_1">
        <div className="top_cont">
            <p className="head_text">
            Softwares
            </p>
            <p className="desc_text">
            Adya has developed products and solutions that are “ORIGINAL” <br /> which support the entire smart grid chain.
            </p>
        </div>
        
        
        <div className="cards_container_11">
            {Software.map((data,idx)=>(
                <div onClick={()=>handleClick(data.route)} className="card" key={idx}   onMouseEnter={() => setIsHovered(idx)}
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
        <Footer/> 
    </div>
  )
}
