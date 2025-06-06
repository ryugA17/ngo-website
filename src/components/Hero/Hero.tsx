import { useRef, useEffect, useState } from 'react';
import HeroSlider from './HeroSlider';
import HeroProfile from './HeroProfile';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add fade effect for sticky transition
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Fade out hero section as we scroll down
      if (scrollTop > heroHeight * 0.4) {
        const opacity = 1 - ((scrollTop - heroHeight * 0.4) / (heroHeight * 0.4));
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      } else {
        heroRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state after a small delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`hero-section ${isLoaded ? 'loaded' : ''}`} ref={heroRef}>
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