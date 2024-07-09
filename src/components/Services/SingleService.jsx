import { useNavigate, useParams } from "react-router-dom";
 
import "../Allsolutions/Single.css";
import { card1_services, cards1_AllSolutions } from "../index";
import { useState } from "react";
import {  Single_service_data } from ".";
import FadeUpAnimation from "../../Routes/FadeUp";


export default function SingleService() {
    const [isHovered, setIsHovered] = useState(false);

    const { single } = useParams();
    const navigate = useNavigate()
    console.log(single)
    const singleData = Single_service_data.find(item => item.route === single);

    if (!singleData) {
        
        return <div>No data found for this route</div>;
    }

    return (
        <div>
            <FadeUpAnimation>

            <div className="top_main">
                <img className="sol_banner" src='/images/Services/serv.png' alt="" />
                <div className="img_cont">
                    <p className="head_text">{singleData.route}</p>
                    <div className="bred">
                        <img src="/images/Homepage/Home.svg" alt="" />
                        <p><span onClick={()=>navigate('/')}>Home</span> / <span onClick={()=>navigate('/services')}>Services</span></p>
                        </div>
                </div>
            </div>
            </FadeUpAnimation>
            <FadeUpAnimation>

            <div className="mid_single">
                <div className="overview">
                    <p className="head_text">Overview</p>
                    <p className="desc_text">{singleData.overviewDesc}</p>
                </div>
                <div className="features">
                    <p className="head_text">Features</p>
                    <div className="feature_container">
                        {singleData.features.map((feature, index) => (
                            <div className="single_feature" key={index}>
                                <p className="head_feature">{feature.feature_head}</p>
                                <p className="desc_feature">{feature.feature_desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="info_graphics">
                <p className="head_text">Solution Architecture</p>
                    <img className="info_g" src={singleData.solution_arch} alt="" />
                </div>
                <div className="permanent">
                    <p className="head_text">Services</p>
                    <img className="perm_img" src='/images/Infograpics/perm_infoGraphics.png' alt="" />
                </div>
            </div>
            </FadeUpAnimation>
            <FadeUpAnimation>

            <div className="sols_links">
              <p className="head_text">
                List of Solutions
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
            </FadeUpAnimation>
        </div>
    );
}





