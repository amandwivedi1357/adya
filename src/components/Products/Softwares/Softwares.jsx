import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { useState } from "react";
import { Software } from "..";
import Footer from "../../Footer/Footer";
import { Fade } from "@chakra-ui/react";
import FadeUpAnimation from "../../../Routes/FadeUp";



export default function Softwares() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState();
    const handleClick = (route)=>{
        navigate(`/${route}`)
    }
  return (
    <FadeUpAnimation>
    <div>
       <Navbar/>
      <div className="top_main">
             <img loading='lazy' className="sol_banner" src="/images/Homepage/products.jpg" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Softwares 
                </p>
               
            </div>
    </div>
    <FadeUpAnimation>

   
    <div className="mid_cont_1">
    <div className="bred">

                 
<p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/products')}>Products</span> {">"} <span onClick={()=>navigate('')}>Softwares</span> </p>
</div>
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
        <Footer/> 
        </FadeUpAnimation>
    </div>
    </FadeUpAnimation>
  )
}
