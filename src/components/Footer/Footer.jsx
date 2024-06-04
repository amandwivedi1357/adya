
import { useNavigate } from "react-router-dom"
import "./Footer.css"
export default function Footer() {
  const navigate = useNavigate()
  return (
   <div className="foot">
    <div className='footer'>
      <div className="footer_cont">
        <div className="contents">
            <p className="list_head">
                Address
            </p>
            <p className="list_desc">
            Plot no.61, Nagarjuna hills, Punjagutta, Hyderabad - 500 082, Telangana, India  
            </p>
        </div>
        <div style={{marginLeft:'20px'}} className="contents">
             <p className="list_head">
                Contact Details
            </p>
            <p className="list_desc">
            +91 40 4857 9530  
            </p>
        </div>
        <div className="contents">
             <p className="list_head">
             Email Id
            </p>
            <p className="list_desc">
            info@adyasmartmetering.com 
            </p>
        </div>
        <div className="contents">
             <p className="list_head">
             Quick Links
            </p>
           <div className='quick_links'>
            <p onClick={()=>navigate('/')}>Home</p>
            <p onClick={()=>navigate('/all-solutions')}>Solutions</p>
            <p>Services</p>
           </div>
           <div style={{marginTop:'20px'}} className='quick_links'>
            <p>About us</p>
            <p style={{marginLeft:'-28px'}}>Products</p>
            <p  onClick={()=>navigate('/sectors')}>Sectors</p>
            </div>  
           <div style={{marginTop:'20px'}} className='quick_links'>
            <p onClick={()=>navigate('/career')}>Career</p>
            {/* <p style={{marginLeft:'-28px'}}>Products</p>
            <p >Sectors</p> */}
            </div>  
           
        </div>
      </div>
      
    </div>
    <p style={{paddingBottom:'2rem'}} className="list_head">@2023Adya - Website by Rayformula</p>
    </div>
    
  )
}
