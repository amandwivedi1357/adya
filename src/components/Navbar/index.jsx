import { useNavigate } from "react-router-dom";
import "./navbar.css"
import { CiSearch } from "react-icons/ci";
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="blue_strip"></div>
      <div className="navbar">
        <div style={{cursor:'pointer'}} onClick={()=>navigate('/')}>
          <img  src="/images/Homepage/logo.svg" alt="" />
          <div>
          <span className="Advanced-Energy-Management">
  Advanced{" "}
  <span className="text-style-1">Energy{" "}</span>
  Management
</span>
</div>
        </div>
        <div className='nav_list'>
  <ul className='navlist_ul'>
  <li onClick={()=>navigate('/all-solutions')}>Solutions</li>
    <li onClick={()=>navigate('/sector')}>Sectors</li>
    <li onClick={()=>navigate('/products')}>Products</li>
    <li onClick={()=>navigate('/services')}>Service</li>
    <li onClick={()=>navigate('/partners')}>Partners</li>
    <li onClick={()=>navigate('/about-us')}>About us</li>
    <li onClick={()=>navigate('/career')}>Career</li>
  </ul>
</div>

        <div className='search'>
          <button  onClick={()=>navigate('/contact-us')}>

       Contact us
          </button>

        </div>
      </div>
    </div>
  )
}
