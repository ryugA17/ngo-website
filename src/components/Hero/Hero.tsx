import { useRef, useEffect } from 'react';
import HeroSlider from './HeroSlider';
import HeroProfile from './HeroProfile';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Add parallax scrolling effect with reduced intensity
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollTop = window.scrollY;
      const parallaxOffset = scrollTop * 0.2; // Reduced from 0.4 to 0.2 for subtler effect
      
      // Apply parallax only to slider container
      const sliderContainer = heroRef.current.querySelector('.hero-slider-container');
      if (sliderContainer) {
        (sliderContainer as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-slider-container">
        <HeroSlider autoSlideInterval={6000} />
      </div>
      <HeroProfile />
    </section>
  );
};

export default Hero; 