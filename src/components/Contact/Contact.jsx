
import { useEffect, useState } from 'react'
import  './Contact.css'
import {City, Country, State} from 'country-state-city';
import { useNavigate } from 'react-router-dom';
import FadeUpAnimation from '../../Routes/FadeUp';
import { useToast } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
const style = {width:'20px',
marginRight:'15px',
}
export default function Contact() {
  
    // const [countries, setCountries] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [states, setStates] = useState([]);
    // const [selectedState, setSelectedState] = useState('');
    // const [cities, setCities] = useState([]);
    const toast = useToast();
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      contactNumber: '',
      // industry: '',
      // jobTitle: '',
      // company: '',
      // // country: selectedCountry,
      // // state: selectedState,
      // city: '',
      // interest: '',
      // looking: '',
      message: '',
    });

    // useEffect(() => {
    //   const allCountries = Country.getAllCountries();
    //   setCountries(allCountries);
    // }, []);
  
    // const handleCountryChange = (event) => {
    //     const newCountryISO = event.target.value;
    //     const newCountry = countries.find(country => country.isoCode === newCountryISO);
    //     setSelectedCountry(newCountryISO);
    //     const newStates = State.getStatesOfCountry(newCountryISO);
    //     setStates(newStates);
    //     setSelectedState(''); 
    //     setCities([]);
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         country: newCountry.name,
    //         state: '', // Reset state when country changes
    //     }));
      
    // };
  
    // const handleStateChange = (event) => {
    //     const newStateCode = event.target.value;
    //     setSelectedState(newStateCode);
    //     const newState = states.find(state => state.isoCode === newStateCode); // Find the state by its ISO code
    //     const stateName = newState ? newState.name : ''; // Get the name of the state or default to an empty string if not found
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         state: stateName, // Update the state name in the formData
    //     }));
    //     const currentCountry = selectedCountry; // Store the current value of selectedCountry
    //     const newCities = City.getCitiesOfState(currentCountry, newStateCode);
    //     setCities(newCities);
    // };
    
    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send('service_2ozh449', 'template_36yquzs', formData, 'rKV6Rh3kT2N6CxjYJ')
        .then((result) => {
          toast({
            title: 'Email Sent Successfully!',
            description: 'We have received your message and will get back to you shortly.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((error) => {
          toast({
            title: 'Error Sending Email',
            description: 'There was an error sending your message. Please try again later.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
          console.error('Error sending email:', error.text);
        });
    };
    const navigate = useNavigate()
  
  return (
    <FadeUpAnimation>
    <div className='contact-us_container'>
       
      <div className="top_main">
             <img loading='lazy'  className="sol_banner" src="images/About/Contact_banner.png" alt="" />
            <div className="img_cont">
                <p className="head_text">
                Connect With Adya
                </p>
                
               
            </div>
        </div>
       
        <FadeUpAnimation>
      <div className="contact_2">
            <div className="bred">

<p><span onClick={()=>navigate('/')}>Home</span> {">"} <span onClick={()=>navigate('/contact-us')}>Contact us</span></p>

</div>
            <div className="contact_2_inner">
                <div className="inner_contact_2 grey">
                    <div className="office_info">
                       <div className="inner_office_info">
                         <img loading='lazy' style={style} className='loc_icon' src="images/About/location.svg" alt="" />
                        <p className='address_head'>India, Headquarters </p>
                       </div>
                       <p className="full_address">Plot no.61, Nagarjuna hills, Punjagutta, Hyderabad - 500 082, Telangana, India</p>
                       <div style={{marginBottom:'23px'}} className="inner_office_info">
                         <img loading='lazy' style={style} className='loc_icon' src="images/About/call.svg" alt="" />
                        <p className='address'>+799 399 4433</p>
                       </div>
                       <div style={{marginBottom:'23px'}} className="inner_office_info">
                         <img loading='lazy' style={style} className='loc_icon' src="images/About/@.svg" alt="" />
                        <p className='address'>info@adyasmartmetering.com </p>
                       </div>

                       <div className="inner_office_info">
                         <img loading='lazy' style={style} className='loc_icon' src="images/About/location.svg" alt="" />
                        <p className='address_head'>North America, Regional Sales </p>
                       </div>
                       <p className="full_address">7909 Rocky Mountain Lane, Mckinney, TX 75070</p>
                       <div style={{marginBottom:'23px'}} className="inner_office_info">
                         <img loading='lazy' style={style} className='loc_icon' src="images/About/call.svg" alt="" />
                        <p className='address'> (972)-832-9454 </p>
                       </div>
                    </div>
                </div>
                <div className="inner_contact_2 imgg">
                     <img loading='lazy' src="images/About/sm_banner.png" alt="" />
                    <div className="text-overlay">
        <p>Find us on google maps</p>
    </div>
                </div>
            </div>
        </div>
        </FadeUpAnimation>
        
        <FadeUpAnimation>
        <div className="mid_text">
            <p className="head_text">Share Your Requirements</p>
        </div>
        </FadeUpAnimation>
        <FadeUpAnimation>
        <div className="contact_form_div">
        <div className="contact_form_outer">
            <form className="contact_form" onSubmit={handleSubmit}>
               <div className="outer_single_line">
                <div className='inner_fields'>
                    <p className='inner_lables' htmlFor="firstname">First Name <span style={{color:'red'}}>*</span></p>
                    <input value={formData.firstname} name="firstname" onChange={handleChange} type="text" className='inner_inputs' id='firstname'/>
                </div>
                <div className='inner_fields'>
                    <p className='inner_lables' htmlFor="lastname">Last Name <span style={{color:'red'}}>*</span></p>
                    <input value={formData.lastname} name='lastname' onChange={handleChange} type="text" className='inner_inputs' id='lastname' />
                </div>
               </div>
               <div className="outer_single_line">
                <div className='inner_fields'>
                    <p className='inner_lables' htmlFor="email">Business Email Id  <span style={{color:'red'}}>*</span></p>
                    <input value={formData.email} onChange={handleChange} name='email' type="email" className='inner_inputs' id='email' />
                </div>
                <div className='inner_fields'>
                    <p className='inner_lables' htmlFor="firstname">Contact Number  <span style={{color:'red'}}>*</span></p>
                    <input value={formData.contactNumber} onChange={handleChange} name='contactNumber' type="text" className='inner_inputs' id='firstname'/>
                </div>
               </div>
               {/* <div className="outer_single_line">
                <div className='inner_fields' style={{ position: 'relative' }}>
                    <p className='inner_lables' htmlFor="industry">Industry 
                     
                      </p>
                    <select value={formData.industry} onChange={handleChange} name='industry'  type="text" className='inner_inputs' id='industry' >
                        <option className='option' value="">1</option>
                        <option className='option' value="">2</option>
                        <option className='option' value="">3</option>
                    </select>
                     <img loading='lazy'  style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
    }} src="images/About/ArrowDropDown.svg" alt="" />
                </div>
                <div className='inner_fields'>
                    <p className='inner_lables' htmlFor="lastname">Job Title <span style={{color:'red'}}>*</span></p>
                    <input value={formData.jobTitle} onChange={handleChange} name='jobTitle' type="text" className='inner_inputs' id='lastname' />
                </div>
               </div>
               <div className="outer_single_line">
                <div className='inner_fields'>
                    <p className='inner_lables' htmlFor="firstname">Contact Number  <span style={{color:'red'}}>*</span></p>
                    <input value={formData.contactNumber} onChange={handleChange} name='contactNumber' type="text" className='inner_inputs' id='firstname'/>
                </div>
                <div className='inner_fields' style={{ position: 'relative' }}>
                    <p className='inner_lables' htmlFor="country">Country / Region <span style={{color:'red'}}>*</span></p>
                    <select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="inner_inputs"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.iso2} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
                     <img loading='lazy'  style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
    }} src="images/About/ArrowDropDown.svg" alt="" />
                </div>
               </div>
               <div className="outer_single_line">
               <div className='inner_fields' style={{ position: 'relative' }}>
                    <p className='inner_lables' htmlFor="state">State <span style={{color:'red'}}>*</span></p>
                    <select
                  
                  value={selectedState}
                  onChange={handleStateChange}
                  className="inner_inputs"
                >
                  <option value="">Select State</option>
                 
                  {states.map((state) => (
                    <option key={state.iso2} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
                     <img loading='lazy'  style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
    }} src="images/About/ArrowDropDown.svg" alt="" />
                </div>
                <div className='inner_fields' style={{ position: 'relative' }}>
                    <p className='inner_lables' htmlFor="city">City<span style={{color:'red'}}>*</span></p>
                    <select
                  disabled={!selectedState}
                  value={formData.city}
                  name="city"
                  onChange={handleChange}
                  className="inner_inputs"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
                     <img loading='lazy'  style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
    }} src="images/About/ArrowDropDown.svg" alt="" />
                </div>
               </div>
               <div className="outer_single_line">
               <div className='inner_fields' style={{ position: 'relative' }}>
                    <p className='inner_lables' htmlFor="interest">Area Of interest <span style={{color:'red'}}>*</span></p>
                    <select value={formData.interest} onChange={handleChange} name='interest'  type="text" className='inner_inputs' id='interest' >
                        <option className='option' value="Solution">Solution</option>
                        <option className='option' value= "Products">Products</option>
                        <option className='option' value="Services">Services</option>
                    </select>
                     <img loading='lazy'  style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
    }} src="images/About/ArrowDropDown.svg" alt="" />
                </div>
                <div className='inner_fields' style={{ position: 'relative' }}>
                    <p className='inner_lables' htmlFor="looking">What are you looking for ? <span style={{color:'red'}}>*</span></p>
                    <select value={formData.looking} onChange={handleChange} name='looking'  type="text" className='inner_inputs' id='looking'  >
                        <option className='option' value="Contact Sales">Contact Sales</option>
                        <option className='option' value="General Enquiry">General Enquiry</option>
                        <option className='option' value="Make A purchase">Make A purchase</option>
                        <option className='option' value="Licenscing of Technology">Licenscing of Technology</option>
                        <option className='option' value="Value Added Partners">Value Added Partners</option>
                        <option className='option' value="Product Related">Product Related</option>
                        <option className='option' value="Service Related">Service Related</option>
                        <option className='option' value="Solutions Related">Solutions Related</option>
                    </select>
                     <img loading='lazy'  style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
    }} src="images/About/ArrowDropDown.svg" alt="" />
                </div>
               </div>
             */}
               <div className="outer_text_area">
               <p className='inner_lables' htmlFor="message">Message<span style={{color:'red'}}>*</span></p>

                <textarea value={formData.message} onChange={handleChange} className='textarea' name="message" id="message" >dsfsf</textarea>
               </div>
               <button type='submit' className='submit_btn'>Submit</button>
            </form>
        </div>
        </div>
        </FadeUpAnimation>
    </div>
    </FadeUpAnimation>
  )
}



// <div className="outer_inp">
//         <div className="input1">
//           <div className="input11">
//             <label htmlFor="name">
//               Name <span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="input_wrapper">
//               <input
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 type="text"
//                 id="name"
//                 required
//               />
//             </div>
//           </div>
//           <div className="input12">
//             <label htmlFor="tel">
//               Contact Number <span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="contact_numWrap">
//               <p className="box">
//                 <span>+91</span>
//               </p>
//               <input
//                 value={formData.contactNo}
//                 onChange={handleInputChange}
//                 type="tel"
//                 id="contactNo"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="input1">
//           <div className="input11">
//             <label htmlFor="email">
//               Email Id<span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="input_wrapper">
//               <input
//                 value={formData.emailId}
//                 onChange={handleInputChange}
//                 type="email"
//                 id="emailId"
//                 required
//               />
//             </div>
//           </div>
//           <div className="input12">
//             <label htmlFor="service_city">
//               City where service is <span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="contact_numWrap">
//               <input
//               type="text"
//                 id="serviceCity"
//                 required
//                 value={formData.serviceCity}
//                 onChange={handleInputChange}
//               />
               
              
//             </div>
//           </div>
//         </div>
//         <div className="input1">
//           <div className="input11">
//             <label htmlFor="start_day">
//               Start day of travel<span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="input_wrapper">
//               <input
//                 placeholder=" "
//                 type="date"
//                 id="startDate"
//                 min={today}
//                 value={formData.startDate}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="input12">
//             <label htmlFor="end_day">
//               End day of travel <span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="contact_numWrap">
//               <input
//                 placeholder=" "
//                 type="date"
//                 min={formData.startDate} 
//                 id="endDate"
//                 required
//                 value={formData.endDate}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="input1">
//           <div className="input11">
//             <label htmlFor="hrs">
//               Time for reporting on 1st day
//               <span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="input_wrapper2">
//               <select
//                 placeholder="hrs"
//                 required
//                 id="reportingTimeHrs"
//                 value={formData.reportingTimeHrs}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled hidden>
//     hrs
//   </option>
//                 {[...Array(24).keys()].map((hour) => (
//     <option key={hour} value={hour}>
//       {hour.toString().padStart(2, '0')}
//     </option>
//   ))}
//               </select>

//               <select
//                 placeholder="24 hours basis"
//                 required
//                 id="reportingTime24Hrs"
//                 value={formData.reportingTime24Hrs}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled hidden>
//     24 hours basis
//   </option>
//                 <option value="00">00</option>
//                 <option value="15">15</option>
//                 <option value="30">30</option>
//                 <option value="45">45</option>
//               </select>
//             </div>
//           </div>
//           <div className="input12">
//           <label htmlFor="choiceOfTravel">
//               Choice of travel<span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="input_wrapper">
//               <select
//                 id="choiceOfTravel"
//                 required
//                 value={formData.choiceOfTravel}
//                 onChange={handleInputChange}
//               >
//                 <option value="Local">Local</option>
//                 <option value="Intercity">Intercity</option>
//                 <option value="Airport">Airport</option>
//                 <option value="Events">Events</option>
//               </select>
            
              
//             </div>
//           </div>
//         </div>

       
//         <div className="input1">
//           <div className="input11">
//             <label htmlFor="address">
//             Pick Up Point<span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="input_wrapper">
//               <input
//                 value={formData.placeOfReporting}
//                 onChange={handleInputChange}
//                 type="text"
//                 id="placeOfReporting"
//                 required
//               />
//             </div>
//           </div>
//           <div className="input12">
//             <label htmlFor="service_city">
//             Point of drop <span style={{ color: "red" }}>*</span>
//             </label>
//             <div className="contact_numWrap">
//               <input
//               type="text"
//                 id="tentativePointOfDrop"
//                 required
//                 value={formData.tentativePointOfDrop}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//          
            
//         </div>
//         <div className="submit_button">

//         <button className="submit_btn" type="submit">
//           Submit
//         </button>
//         </div>

//         <div className="terms">
//           <p className="terms_text">Terms And Conditions:</p>
//           <p>
//             1. Booking will be confirmed subject to availability separately
//             through email <br />
//             2. Type of vehicle mentioned is only indicative of the category and
//             similar category vehicle shall be provided in case of non
//             availability <br />
//             3. Service is on a best effort basis <br />
//             4. Rates indicated for the different cities apply and sending the
//             request for vehicle indicates acceptance to the terms and conditions
//             of hire outlined elsewhere on the website. <br />
//             5. We shall try and get back asap to you on your online enquiry /
//             booking. However, please do factor a revert back in upto 24 hrs.
//             from the time of placing the request. For immediate requirements,
//             Please call at the operations nos. listed in the contact section.{" "}
//             <br />
//           </p>
//         </div>
//       </div>