import { useNavigate } from "react-router-dom";
import "./Products.css"
import { useState } from "react";
import { products_Card } from "..";
import ProductsSlider from "../Sliders/ProductsSlider";
import FadeUpAnimation from "../../Routes/FadeUp";

export default function ProductsMain() {
    
    const [isHovered5, setIsHovered5] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState();
  const handleClick = (route)=>{
      navigate(`/${route}`)
  }
  return (
    <div className="products_container">
         <FadeUpAnimation>
         <div className="top_main">
            <img className="sol_banner" src="images/Product/prod.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Products 
                </p>
                
            </div>
    </div> 
    </FadeUpAnimation>
    <FadeUpAnimation>

    <div className="mid_cont_1">
    <div className="bred">

                 
<p><span onClick={()=>navigate('/')}>Home</span> / <span onClick={()=>navigate('/products')}>Products</span></p>

</div>
        <div className="top_cont">
            <p className="head_text">
            Products We Offer
            </p>
            <p className="desc_text">
            Adya has developed products and solutions that are “ORIGINAL” <br /> which support the entire smart grid chain.
            </p>
        </div>
        
        
        <div className="cards_container_11">
            {products_Card.map((data,idx)=>(
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
    </FadeUpAnimation>
    <FadeUpAnimation>
        <div className="tab_cont_mob">
        <div className="tabs">
        {
            products_Card.map((data,idx)=>(
                <div key={idx} className="tab" onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)} onClick={()=>handleClick(data.route)}>
                        <div className="in_tab">
                            <img src={
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

  )
}
