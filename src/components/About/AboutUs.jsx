/* eslint-disable react/no-unescaped-entities */

import { listData } from "..";

import "./About.css";
const board = [
    {
        img:"images/About/VP.png",
        name:'Viraj  Pathi',
        post:'Founder & CEO'
    },
    {
        img:"images/About/viru.png",
        name:'Virupakshi',
        post:'VP Engineering (Products)'
    },
    {
        img:"",
        name:'',
        post:''
    },
    {
        img:"",
        name:'',
        post:''
    },
]
export default function AboutUs() {
  return (
    <div className="about_container">
      <div className="top_main">
        <img className="sol_banner" src="images/About/Banner.png" alt="" />
        <div className="img_cont">
          <p className="head_text">About Us</p>
          <div className="bred">
            <img src="images/Homepage/Home.svg" alt="" />
            <span>Home/About Us</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="top_cont">
          <p className="head_text">Who We Are</p>
          <p className="desc_text">
            Adya is a Sanskrit term meaning "Original," reflecting our core
            philosophy. We pioneer unique solutions for the smart grid
            ecosystem. Our journey started with a mission: to create SMART and
            efficient utility solutions. Today, we stand out by offering
            comprehensive solutions, combining high-end metering, advanced
            communication, cutting-edge software, and consulting. <br /> <br />
            Our research and innovations aim to transform how utilities and
            energy retailers manage resources and data. We help them consolidate
            information from various sources to realize their smart grid vision,
            enhancing global customer service. <br /> <br />
            Adya is positioned to deploy cutting-edge technology for Earth's
            resource conservation. The importance of power has risen due to
            global scarcity. Utility companies and energy retailers grapple with
            supply constraints, environmental regulations, and changing demand
            driven by electric vehicles, distributed generation, and energy
            conservation.
            <br /> <br />
            Environmental consciousness, climate change, rising energy prices,
            and technology advancements are reshaping consumer behavior.
            Consumers seek control, transitioning from passive customers to
            informed, environmentally conscious individuals.
            <br /> <br />
            As a technological leader in energy, water, and gas metering, Adya
            Smart Metering provides end-to-end solutions globally, addressing
            evolving needs with innovative solutions.
            <br /> <br />
          </p>
        </div>
        
      </div>
      <div className="mid_cont">
        <div className="mill_div">
            <img className="mid_banner" src="images/About/mid_banner.png" alt="" />
        </div>
        <p className="head_text">
        Our Vision & Mission
        </p>

    <div className="img_cont">
        <div className="img_cards">
            <div className="inner_img_cards">
            <p className="text_head">Vision</p>
            <p className="text_desc">Our goal is to make power accessible, affordable and sustainable for both utilities and consumers.</p>
            </div>
            
        </div>
        <div className="img_cards">
            <div className="inner_img_cards">
            <p className="text_head">Mission</p>
            <p className="text_desc">To become the primary platform for energy management among consumers and provide high precision smart meter device.</p>
            </div>
            
        </div>
    </div>
        </div>
        <div className="mid_cont_5" style={{marginLeft:'100px'}}>
      <div className="top_cont">
            <p className="head_text">
            Why Our Customers <br /> Choose  Working With Us
            </p>
            <p className="desc_text">Adya empowers you and your community to control your energy <br /> generation and payments.</p>
        </div>
        <div className="bottom_cont">
            {
                listData.map((data,idx)=>(
                    <div key={idx} className="single_list">
                        <div className="head">
                            <div className="eclipse"></div>
                            <p className="head_text">
                                {data.head}
                            </p>
                        </div>
                        <p className="desc_text">
                            {data.desc}
                        </p>
                    </div>
                ))
            }
        </div>
        <button style={{margin:"44px  0 0 36px "}} className="contact_btn">Contact us</button>
      </div>
      <div className="mid_cont2">
        <img src="images/About/mid2_ban.png" alt="" className="awards" />
      </div>
      <div className="mid_cont3">
        <div className="About_top">
            <p className="head_text">
            Our Team Members
            </p>
        </div>
        <div className="about_members">
            {board.map((data,idx)=>(
                <div key={idx} className="single_member">
                    <img src={data.img} alt={data.name} className="mem_img" />
                    <p className="name">
                        {data.name}
                    </p>
                    <p className="post">
                        {data.post}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
