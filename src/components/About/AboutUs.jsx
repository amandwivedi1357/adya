/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";
import { listData } from "..";

import "./About.css";
import FadeUpAnimation from "../../Routes/FadeUp";
import Carousel from "./Slider";
 const board = [
    {
        img:"/images/About/VP.png",
        name:'Viraj  Pathi',
        post:'Founder & CEO'
    },
    {
        img:"/staff/Virupakshi-removebg-preview (1).png",
        name:'Virupakshi',
        post:'VP Engineering (Products)'
    },
    
    {
        img:"/staff/Vimala-removebg-preview (1).png",
        name:'Vimala',
        post:'VP Engineering'
    },
    {
        img:"/staff/Srinivas-removebg-preview.png",
        name:'Srinivas',
        post:'VP Engineering'
    },
    {
        img:"/staff/Sindhu-removebg-preview.png",
        name:'Sindhu',
        post:'VP Engineering'
    },
    {
        img:"/staff/Shaik-removebg-preview.png",
        name:'Shaik',
        post:'VP Engineering'
    },
    {
        img:"/staff/Satish-removebg-preview.png",
        name:'Satish',
        post:'VP Engineering'
    },
    {
        img:"/staff/Nagamani-removebg-preview.png",
        name:'Nagamani',
        post:'VP Engineering'
    },
    // {
    //     img:"/staff/mudda-removebg-preview.png",
    //     name:'',
    //     post:'VP Engineering'
    // },
    // {
    //     img:"/staff/.png",
    //     name:'',
    //     post:'VP Engineering'
    // },
    {
        img:"/staff/Mannar-removebg-preview.png",
        name:'Mannar',
        post:'VP Engineering'
    },
    {
        img:"/staff/J_Hari-removebg-preview (1).png",
        name:'J_Hari',
        post:'VP Engineering'
    },
    {
        img:"/staff/Anitha-removebg-preview.png",
        name:'Anitha',
        post:'VP Engineering'
    },
    {
        img:"/staff/Anil-removebg-preview.png",
        name:'Anil',
        post:'VP Engineering'
    },
]
export default function AboutUs() {
  const navigate = useNavigate()
  return (
    <div className="about_container">
        <FadeUpAnimation>
      <div className="top_main">
        <img className="sol_banner" src="images/About/Banner.png" alt="" />
        <div className="img_cont">
          <p className="head_text">About Us</p>
          <div className="bred">
            <img src="/images/Homepage/Home.svg" alt="" />
            <p><span onClick={()=>navigate('/')}>Home</span> / <span onClick={()=>navigate('/about-us')}>About us</span></p>
            </div>
        </div>
      </div>
      </FadeUpAnimation>
      <FadeUpAnimation>
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
      </FadeUpAnimation>
      <FadeUpAnimation>

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
      </FadeUpAnimation>
      <FadeUpAnimation>

        <div className="mid_cont_5" >
      <div className="top_cont">
            <p className="head_text">
            Why Our Customers  Choose  Working With Us
            </p>
            <p className="desc_text">Adya empowers you and your community to control your energy  generation and payments.</p>
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
        <button style={{margin:"84px  0 0 36px "}} className="contact_btn">Contact us</button>
      </div>
      </FadeUpAnimation>
      <FadeUpAnimation>

      <div className="mid_cont2">
        <div className="left">

        <img src="images/Services/awards.png" alt="" className="awards" />
        </div>
        <div className="right">
            <p className="head_text">Awards & Recognitions</p>
            <div className="btm_cont">
                <div className="award1">
                    <img src="/images/Services/aw1.svg" alt="" />
                    <p className="head_text1">
                    Electrical Research & Development Association
                    </p>
                </div>
                <ul className="award_year">
                        <li>Certificate of Life Membership</li>
                        <li>Year of Issue - 29/10/2018</li>
                        
                    </ul>
                <div className="award2">
                    <img src="/images/Services/aw1.svg" alt="" />
                    <p className="head_text1">
                    Earth Care Award - 2012
                    </p>
                    
                </div>
                <ul className="award_year">
                        <li>JSW - Time Of India</li>
                        <li>Year of Issue - 29/10/2018</li>
                        
                    </ul>
            </div>
        </div>
      </div>
      </FadeUpAnimation>
      
      <div className="mid_cont3">
        <div className="About_top">
            <p className="head_text">
            Our Team Members
            </p>
            <p className="desc_text">
            Empowering Journeys, Empowered Words.
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
        <div className="mob_carousel">

        <Carousel/>
        </div>
      </div>
      
    </div>
  );
}
