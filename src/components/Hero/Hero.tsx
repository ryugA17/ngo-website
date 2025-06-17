import { useRef, useEffect, useState } from 'react';
import HeroSlider from './HeroSlider';
import HeroProfile from './HeroProfile';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Remove fade effect on scroll and keep hero visible
  useEffect(() => {
    // Set loaded state immediately for animations
    setIsLoaded(true);
    
    // Ensure hero stays visible regardless of scroll position
    if (heroRef.current) {
      heroRef.current.style.opacity = '1';
    }

    return () => {
      // No cleanup needed for scroll events since we're not adding any
    };
  }, []);

  return (
    <div 
      className={`hero-section ${isLoaded ? 'loaded' : ''}`} 
      ref={heroRef}
      style={{ display: 'flex', visibility: 'visible', opacity: 1 }}
    >
      <div className="hero-slider-container">
        <HeroSlider autoSlideInterval={6000} />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      <HeroProfile />
    </div>
  );
};

export default Hero; 