import { useRef, useEffect } from 'react';
import HeroSlider from './HeroSlider';
import HeroContent from './HeroContent';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Add parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollTop = window.scrollY;
      const parallaxOffset = scrollTop * 0.4;
      
      heroRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <HeroSlider autoSlideInterval={6000} />
      <div className="hero-content-wrapper">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero; 