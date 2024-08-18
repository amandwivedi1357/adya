import { useNavigate, useParams } from "react-router-dom"
import "./SingProd.css"
import { list_measurement, singleProdInfo } from ".";
import { useState } from "react";
import FadeUpAnimation from "../../Routes/FadeUp";
import { products_Card } from "..";

export default function SingProduct() {
    const [isHovered, setIsHovered] = useState(false);

    const { single } = useParams();
    const navigate = useNavigate()
    const singleData = singleProdInfo.find(item => item.single === single);
    console.log(singleData)

    if (!singleData) {
        
        return <div>No data found for this route</div>;
    }
  return (
    <div className="Single_prod_container">
<FadeUpAnimation>

      <div className="top_main">
                <img className="sol_banner" src='/images/Homepage/products.jpg' alt="" />
                <div className="img_cont">
                    <p className="head_text">{singleData.head}</p>
                   
                </div>
            </div>
</FadeUpAnimation>
<FadeUpAnimation>

      <div className="inner1">
      <div className="bred">

                 
<p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/products')}>Products</span> {">"} <span onClick={()=>navigate('/Measurement-Device')}>Measurement-Device</span> {">"} <span onClick={()=>navigate('/Measurement-Device')}>{singleData.head}</span></p>
</div>
        <div className="overview_cont">

        <p className="prod_head_text">
        Overview
        </p>
        <p className="desc_text">
          {singleData.overview}
        </p>
        </div>
        <div className="overview_cont standard">

        <p className="prod_head_text">
        Standard
        </p>
        <ul>

        
        {
         singleData.standard.IEC && (
          <li className="desc_text">
          {singleData.standard.IEC }
        </li>
         ) 
        }
        <li className="desc_text">
          {singleData.standard.IS}
        </li>
        </ul>
        </div>
        <div className="overview_cont vc">
            <div className="variant_cont">
              <div className="left">
                <p className="prod_head_text">
                Variants 
                </p>
                <ul className="flex_ul">

        
        <li className="desc_text">
          {singleData.variant.var1 }
        </li>
        {
          singleData.variant.var2 && (
            <li className="desc_text">
          {singleData.variant.var2}
        </li>
          )
        }
        
        </ul>
              </div>
              <div className="right">
              <p className="prod_head_text">
              Communication Supported 
                </p>
                <ul className="flex_ul">
                {singleData.communicationSupported.map((item,idx)=>(
                  <li key={idx} className="desc_text">
                      {item}
                  </li>
                ))}
        </ul>
              </div>
            </div>
        </div>
        <div className="overview_cont app">
           <p className="prod_head_text">
           Applications
           </p>
           <ul className="application_cont">
                {singleData.applications.map((item,idx)=>(
                  <li key={idx}>
                    {item}
                  </li>
                ))}
           </ul>
        </div>
        <div className="overview_cont ks">
           <p className="prod_head_text">
           Key Specification
           </p>
           <div className="Specification_cont">
               <div className="left">
               {Object.entries(singleData.keyFeatures).map(([key, value], index) => (
                    <div key={index} className="key_features">
                      <div>
                      <p className="key">  {key.charAt(0).toUpperCase() + key.slice(1)}:</p>
                      </div>
                      <div>
                      <p className="value">{value}</p>
                      </div> 
                    </div>
                ))}
                </div> 
               <div className="right">
                  <p><strong>Additional Features :</strong></p>
                  <p>{singleData.additionalFeatures}</p>
                  <p><strong>Physical Characteristics :</strong></p>
                  <p>{singleData.physicalCharacteristics}</p>
                </div> 
           </div>
        </div>
        <div className="images_container">
          {singleData.images.map((item,idx)=>(
            <div key={idx} className="single_image">
                 {/* <img src='/images/Services/Partners.png' key={idx} alt="" /> */}
            </div>
           
          ))}
        </div>
        
      </div>
</FadeUpAnimation>
      <FadeUpAnimation>

      <div className="sols_links">
              <p className="head_text">
              List Of Measurement Devices
              </p>
              <div className="links">
                {
                  products_Card.map((data,idx)=>(
                    <div className="single_link" key={idx} onClick={()=>navigate(`/${data.route}`)} onMouseEnter={() => setIsHovered(idx)}
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
      </FadeUpAnimation>
    </div>
  )
}
