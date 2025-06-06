import { useRef, useEffect } from 'react';
import HeroSlider from './HeroSlider';
import HeroProfile from './HeroProfile';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Add scroll effect for sticky transition
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !sliderRef.current) return;
      
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Parallax effect for slider
      sliderRef.current.style.transform = `translateY(${scrollTop * 0.2}px)`;
      
      // Fade out hero section as we scroll down
      if (scrollTop > heroHeight * 0.3) {
        const opacity = 1 - ((scrollTop - heroHeight * 0.3) / (heroHeight * 0.5));
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      } else {
        heroRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-section" ref={heroRef}>
      <div className="hero-slider-container" ref={sliderRef}>
        <HeroSlider autoSlideInterval={6000} />
      </div>
      <HeroProfile />
    </div>
  );
};

export default Hero; 