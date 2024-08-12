
import { useNavigate } from "react-router-dom"
import "./partner.css"
import FadeUpAnimation from "../../Routes/FadeUp"
export default function PartnerMain() {
    const navigate = useNavigate()
  return (
    <div>
        <FadeUpAnimation>
       <div className="top_main">
                <img className="sol_banner" src='/images/Services/Partners.png' alt="" />
                <div className="img_cont">
                    <p className="head_text">Partners</p>
                    
                </div>
            </div>
            </FadeUpAnimation>
            <FadeUpAnimation>

            <div className="partners_desc">
            <div className="bred">
                         
                         <p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/partners')}>Partners</span></p>
                         </div>
                <p className="head_text">
                Seeking Strategic Partnerships to Revolutionize Energy Management.
                </p>
                <p className="desc_text">
                Adya Smart Metering Pvt. Ltd. is actively seeking dynamic and visionary strategic partners to join us in transforming the energy sector. Our goal is to expand our reach and impact through collaborative efforts in three key areas 
                </p>
                <div className="partner_detail_container">
                    <div className='part_inner_cont'>

                <p className="head_text2">
                Channel Partner Solutions
                </p>
                <p className="desc_text">
                We are looking for channel partners to distribute and integrate our innovative Smart Meters and Energy Management solutions, including Distributed Energy Resource Management Systems (DERMS) and Net Metering. Our focus sectors include commercial enterprises, industrial setups, and residential communities, where our advanced technology can significantly enhance energy efficiency and management.
                </p>
                    </div>
                    <div className='part_inner_cont'>

                <p className="head_text2">
                Advanced Metering Infrastructure Service Providers (AMISP)
                </p>
                <p className="desc_text">
                Adya is open to partnerships under the Design, Build, Finance, Operate, and Transfer (DBFOT) model, including Operate, Own, and Transfer (OOT) arrangements. We invite entities interested in obtaining certification and exploring joint ventures or Special Purpose Entities (SPE) to collaborate with us. Our aim is to deliver sustainable and efficient energy solutions to utilities, aligning with our commitment to innovation and excellence.
                </p>
                    </div>
                    <div className='part_inner_cont'>

                <p className="head_text2">
                Licensing/White Label Opportunities
                </p>
                <p className="desc_text">
                For companies aspiring to own and offer cutting-edge products in their markets, Adya offers licensing opportunities. We provide access to our proprietary Smart Meter devices and our acclaimed RF Mesh technology. This partnership is ideal for companies seeking to brand and market these advanced solutions under their own name, ensuring they stay at the forefront of the smart metering and energy management industry.
                </p>
                    </div>
                </div>
               

               <div className="Partner_Banner_cont">
                    <div className="left">
                        <div className="inner_left">
                            <p className="top_text">
                            Join us in our journey to redefine energy management and distribution.
                            </p>
                            <p className="mid_text">
                            Together, we can create a more sustainable, efficient, and intelligent energy future. Contact us to explore how a strategic partnership with Adya can benefit your organization and the wider community.
                            </p>
                            <div className='search'>
          <button  onClick={()=>navigate('/contact-us')}>

       Contact us
          </button>

        </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src="images/Services/lightning.png" alt="" />
                    </div>
               </div>
            </div>
            </FadeUpAnimation>
    </div>
  )
}
