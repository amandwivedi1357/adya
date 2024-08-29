import { useNavigate, useParams } from "react-router-dom";
import { Single_solution_data } from "./index"; 
import "./Single.css";
import { cards1_AllSolutions, cards1_Sectors } from "../index"; // Import cards1_Sectors
import { useState } from "react";
import FadeUpAnimation from "../../Routes/FadeUp";

export default function Single() {
    const [isHovered, setIsHovered] = useState(false);

    const { single } = useParams();
    const navigate = useNavigate();
    
    const singleData = Single_solution_data.find(item => item.route === single);
console.log(singleData)
    if (!singleData) {
        return <div>No data found for this route</div>;
    }

    return (
        <div>
             
                
            <div className="top_main">
                 <img loading='lazy' className="sol_banner" src='images/Homepage/singl_sol1.jpg' alt="" />
                <div className="img_cont">
                    <p className="head_text">{singleData.route}</p>
                  
                </div>
            </div>
             
             

            <div className="mid_single">
            <div className="bred">
                         
                         <p><span onClick={()=>navigate('/')}>Home</span> {'>'} <span onClick={()=>navigate('/all-solutions')}>Solutions</span></p>
                     </div>
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
                {
                    singleData.solution_arch && (
                        <div className="info_graphics">
                            <p className="head_text">Solution Architecture</p>

                             <img loading='lazy' className="info_g" src={singleData.solution_arch} alt="" />
                        </div>
                    )
                }
                {/* {
                    singleData.solution_img && (
                        <div className="permanent">
                            <p className="head_text">Services</p>
                             <img loading='lazy' className="perm_img" src={singleData.solution_img} alt="" />
                        </div>
                    )
                } */}
            </div>
             
             

            <div className="sols_links">
                {
                    singleData.tag === 'solutions' ? (
                        <>
                            <p className="head_text">List of Solutions</p>
                            <div className="links">
                                {
                                    cards1_AllSolutions.map((data, idx) => (
                                        <div className={`single_link ${singleData.route === data.head ? 'active' : ''}`} key={idx} onClick={() => navigate(`/${data.head}`)} onMouseEnter={() => setIsHovered(idx)} onMouseLeave={() => setIsHovered(null)}>
                                            <div className="inner">
                                             <img loading='lazy' 
                                                    className="link_img" 
                                                    src={isHovered === idx || singleData.route === data.head ? data.hover : data.img} 
                                                    alt="" 
                                                />
                                                <p className="link_text">{data.head}</p>
                                            </div>
                                            <p className="arrow-right">→</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="head_text">List of Sectors</p>
                            <div className="links">
                                {
                                    cards1_Sectors.map((data, idx) => (
                                        <div className="single_link" key={idx} onClick={() => navigate(`/${data.head}`)} onMouseEnter={() => setIsHovered(idx)} onMouseLeave={() => setIsHovered(null)}>
                                            <div className="inner">
                                                 <img loading='lazy' className="link_img" src={isHovered === idx ? data.hover : data.img} alt="" />
                                                <p className="link_text">{data.head}</p>
                                            </div>
                                            <p className="arrow-right">→</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                }
            </div>
             
        </div>
    );
}
