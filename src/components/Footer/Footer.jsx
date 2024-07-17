
import { useNavigate } from "react-router-dom"
import "./Footer.css"
import { card1_services, cards1_AllSolutions, cards1_Sectors, products_Card } from ".."
export default function Footer() {
  const quick = [
    {
      name:'Home',
      link:'/'
    },
    {
      name:'About Us',
      link:'/about-us'
    },
    {
      name:'Careers',
      link:'/career'
    },
    {
      name:'Contact us',
      link:'/contact-us'
    },
    {
      name:'Partners',
      link:'/partners'
    },
  ]
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
      <div className="footer_cont">
        <div className="serve_cont">

        
      
        <ul className="serve_list">
        <p className="list_head">
                All Solutions
            </p>
          {
            cards1_AllSolutions.map((data,idx)=>(
              <li key={idx} onClick={()=>navigate(`/${data.head}`)}>
                {data.head}
              </li>
            ))
          }

        </ul>
        <ul className="serve_list">
        <p className="list_head">
               Products
            </p>
          {
            products_Card.map((data,idx)=>(
              <li key={idx} onClick={()=>navigate(`/${data.route}`)}>
                {data.head}
              </li>
            ))
          }
        </ul>
        </div>
      </div>
     
      <div className="footer_cont">
        <div className="serve_cont">

      <ul className="serve_list">
        <p className="list_head">
                Services
            </p>
          {
            card1_services.map((data,idx)=>(
              <li key={idx} onClick={()=>navigate(`/services/${data.route}`)}>
                {data.head}
              </li>
            ))
          }
        </ul>
        <ul className="serve_list">
        <p className="list_head">
                Sectors
            </p>
          {
            cards1_Sectors.map((data,idx)=>(
              <li key={idx} onClick={()=>navigate(`/sector/${data.route}`)}>
                {data.head}
              </li>
            ))
          }
        </ul>
          </div>
      </div>
      <div className="footer_cont">
        <div className="serve_cont">

     
            <ul className="serve_list">
            <p className="list_head">
                Quick Links
            </p>
            {
               quick.map((data,idx)=>(
                <li key={idx} onClick={()=>navigate(data.link)}>
                  {data.name}
                </li>
              ))

            }
            </ul>
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
    <p style={{paddingBottom:'2rem'}} className="list_head ray_formula">@2024Adya - Website by Ray Formula</p>
    </div>
    
  )
}
