import Slider from "react-slick";
import "./SolutionsSlider.css"
import { cards1_data } from "..";

export default function SolutionsSlider() {
   
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        //  autoplaySpeed: 1000
      };
  return (
  <div className="sols_mob">
  
    <Slider {...settings}>
    {cards1_data.map((data,idx)=>(
        
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
            ))}
  
  </Slider>
  </div>
  )
}
