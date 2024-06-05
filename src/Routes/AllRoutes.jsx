import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import AllSolutions from "../pages/AllSolutions/AllSolutions";
import Career from "../pages/career/Career";

import SingleSols from "../pages/SingleSolutions/SingleSols";
import Aboutus from "../pages/About/Aboutus";
import ContactUs from "../pages/ConatctUs/ContactUs";
import Sectors from "../pages/Sectors/Sectors";
import SingleSector from "../components/Sectors/SingleSector";
import SingleSect from "../pages/SingleSector/SingleSect";
import Products from "../pages/Products/Products";
import Services from "../pages/Services/Services";
import SingleServices from "../pages/SingleServices/SingleServices";
import Partners from "../pages/Partners/Partners";


export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
      <Route path="/all-solutions" element={<AllSolutions/>} />
      <Route path="/:single" element={<SingleSols/>} />
       <Route path="/career" element={<Career/>} />
       <Route path="/partners" element={<Partners/>} />

       <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/about-us" element={<Aboutus/>} />
      <Route path="/sector" element={<Sectors/>} />
      <Route path="/sector/:single" element={<SingleSect/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/services/:single" element={<SingleServices/>} />
      <Route path="/sector/:sectors" element={<SingleSect/>} />
      <Route path="/products" element={<Products/>}/>
      {/* <Route path="/products/single" element={<Products/>}/> */}
    </Routes>
  )
}
