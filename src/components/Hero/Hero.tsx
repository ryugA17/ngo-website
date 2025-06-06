import { useRef, useEffect } from 'react';
import HeroSlider from './HeroSlider';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Add parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollTop = window.scrollY;
      const parallaxOffset = scrollTop * 0.4;
      
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
    <section className="hero" ref={heroRef}>
      <div className="hero-slider-container">
        <HeroSlider autoSlideInterval={6000} />
      </div>
    </section>
  );
};

export default Hero; 