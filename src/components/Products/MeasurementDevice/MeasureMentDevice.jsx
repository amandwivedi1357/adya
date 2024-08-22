import React, { useState } from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { D2S, Measurement, prepayMeter } from '..';
import ProductsSlider from '../../Sliders/ProductsSlider';
import FadeUpAnimation from '../../../Routes/FadeUp';

export default function MeasureMentDevice() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState();
    const handleClick = (route)=>{
        navigate(`/${route}`)
    }
  return (
    <div>
      <Navbar/>
       
      <div className="top_main">
            <img className="sol_banner" src="/images/Homepage/products.jpg" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Products 
                </p>
               
            </div>
    </div> 
     
     

    <div className="mid_cont_1">
    <div className="bred">

                 
<p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/products')}>Products</span> {">"} <span onClick={()=>navigate('')}>Measurement-Device</span> </p>
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
            {Measurement.map((data,idx)=>(
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
     
     

        <div className="solutions_Slider">
        <ProductsSlider item={Measurement}/>
      </div>
     
     
        
    <div className="mid_cont_1">
        <div className="top_cont">
            <p className="head_text">
            Prepayment Meters
            </p>
            <p className="desc_text">
            Introducing our advanced Smart Prepaid System for Commercial, Industrial, and Home use.             </p>
        </div>
        
        
        <div className="cards_container_11">
            {prepayMeter.map((data,idx)=>(
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
     
     

        <div className="solutions_Slider">
        <ProductsSlider item={prepayMeter}/>
      </div>
     
     

    <div className="mid_cont_1">
        <div className="top_cont">
            <p className="head_text">
            D2S
            </p>
            <p className="desc_text">
            We upgrade existing meters to smart systems, saving both utilities and consumers money.            
             </p>
        </div>
        
        
        <div className="cards_container_11">
            {D2S.map((data,idx)=>(
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
     
     

        <div className="D2S_Mob">
            {
                D2S.map((data,idx)=>(
                    <div className="card" key={idx}>  
                    <img src={data.hover} alt="" className="card_vect" />
                    <div className="redd" style={{display:"flex"}}>
                    <p className="head_text">
                        {data.head}{" "}
                        
                    </p>
                    <span className="follow-up">{data?.followUp}</span>
                    </div>
                    <p className="desc_text">{data.desc}</p>

                    <p className="explore">Explore{"    "}  <span style={{marginLeft:"1rem"}}>→</span></p>
                </div>
      
                ))
            }
        </div>
     
      <Footer/>
    </div>
  )
}
