
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
        <div  className="contents">
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
        
      </div>
      {/* <div className="footer_cont2">

    
      <div className="contents">
             <p className="list_head">
             Quick Links
            </p>
           <div className='quick_links'>
            <p onClick={()=>navigate('/')}>Home</p>
            <p onClick={()=>navigate('/all-solutions')}>Solutions</p>
            <p  onClick={()=>navigate('/services')}>Services</p>
           </div>
           <div style={{marginTop:'20px'}} className='quick_links'>
            <p  onClick={()=>navigate('/about-us')}>About us</p>
            <p className="footer_prod"  onClick={()=>navigate('/products')}>Products</p>
            <p  onClick={()=>navigate('/sector')}>Sectors</p>
            </div>  
           <div style={{marginTop:'20px'}} className='quick_links'>
            <p onClick={()=>navigate('/career')}>Career</p>
            <p style={{marginLeft:'-28px'}}>Products</p>
            <p >Sectors</p> 
            </div>  
           
        </div>
        </div> */}
    </div>
    <p style={{paddingBottom:'2rem'}} className="list_head ray_formula">@2023Adya - Website by Ray Formula</p>
    </div>
    
  )
}
