import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import { positionsData } from '..';
import "./Career.css"
export default function SingleCareer() {
    

    const { single } = useParams();
    const navigate = useNavigate()
     const singleData = positionsData.find(item => item.postName === single);
     console.log(singleData)

    if (!singleData) {
        
        return <div>No data found for this route</div>;
    }
    const handleClick = (route)=>{
        navigate(`/career/${route}`)
    }
  return (
    <div>
      <Navbar/>
        <div className="career_container">

        <div className="top_main">
             <img loading='lazy' className="sol_banner" src="/images/Homepage/careerBanner.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Join Our Team 
                </p>
                
               
            </div>
    </div>
    
        <div className="overview">
        <div className="bred">

                
        <p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/career')}>Career</span></p>

</div>
                    <p className="head_text">{singleData.postName}</p>
                    <p className="desc_text">{singleData.postDesc}</p>

            
            <div className="mandates">
                <div className='inner_mandates'>{singleData.yearsExp}</div>
                <div className='inner_mandates'>{singleData.fullTime}</div>
                <div className='inner_mandates'>{singleData.onsiteRemote}</div>
            </div>

                </div>
                <div className="req_skills">
                    <div className="head_text">Required Skills</div>

                    <div className="mid_cont_5">
      
        <div className="bottom_cont">
            {
                singleData.requiredSkills.map((data,idx)=>(
                    <div key={idx} className="single_list">
                        <div className="head">
                            <div className="eclipse"></div>
                            <p className="desc_text">
                            {data}
                        </p>
                        </div>
                       
                    </div>
                ))
            }
        </div>
        <button className="contact_btn" onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSenYTZKEShcDepz2PJ9trgYGyftdyOJseNsvp6wrVwMpckS-Q/viewform","_blank")}>Apply Now</button>
      </div>
                </div>

                <div className="tab_cont_mob">
                    <p className="head_text">List Of Careers</p>
        <div className="tabs">
        {
            positionsData.map((data,idx)=>(
                <div key={idx} className="tab" onClick={()=>handleClick(data.postName)}>
                        <div className="in_tab">
                            
                            <p className="tab_text">
                           {data.postName}
                            </p>
                        </div>
                        <p style={{marginTop:'5px',fontWeight:'bold'}}
                        className="tab_text">→</p>
                    </div>
            ))
        }
      
      </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}
