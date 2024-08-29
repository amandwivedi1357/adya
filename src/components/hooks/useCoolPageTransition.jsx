import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const useCoolPageTransition = () => {
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    // Animate out the current page
    tl.to('.page', {
      duration: 0.5,
      scale: 0.95,
      opacity: 0,
      xPercent: 100,
    });

    // Animate in the new page
    tl.fromTo(
      '.page',
      { scale: 0.95, opacity: 0, xPercent: -100 },
      {
        duration: 0.75,
        scale: 1,
        opacity: 1,
        xPercent: 0,
        delay: 0.1,
      }
    );

    return () => {
      // Clean up if necessary
    };
  }, [location]);
};

export default useCoolPageTransition;
