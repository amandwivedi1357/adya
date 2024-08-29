import gsap from "gsap";
import { useEffect } from "react";
import "./overlay.css"
const Overlay = () => {
    useEffect(() => {
      gsap.fromTo(
        '.overlay',
        { xPercent: -100 },
        { xPercent: 100, duration: 1.5, ease: 'power2.inOut' }
      );
    }, []);
  
    return <div className="overlay"></div>;
  };
  
  export default Overlay;
  