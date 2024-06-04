
import "./Career.css"
import { positionsData } from "..";
import Positions from "./Positions";
import { useState } from "react";
export default function CareerMain() {

    const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <div>
      <div className="top_main">
            <img className="sol_banner" src="images/Homepage/careerBanner.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Join Our Team 
                </p>
                <div className="bred">

                <img src="images/Homepage/Home.svg" alt="" />
                <span>Home/Solutions</span>
                </div>
               
            </div>
    </div>
    <div className="mid_cont_1">
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
    </div>
  )
}
