import { useState, useEffect, useRef, useCallback } from 'react';
import './HeroSlider.css';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';

interface SlideProps {
  image: string;
  active: boolean;
  index: number;
}

const Slide: React.FC<SlideProps> = ({ image, active, index }) => {
  const titles = [
    "Rural Development",
    "Empowering Communities"
  ];
  
  return (
    <div 
      className={`hero-slide ${active ? 'active' : ''}`} 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}
      aria-hidden={!active}
      role="img"
      aria-label={`Banner slide ${index + 1}: ${titles[index]}`}
    >
      <div className="slide-caption">
        <h2>{titles[index]}</h2>
      </div>
    </div>
  );
};

interface HeroSliderProps {
  autoSlideInterval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ autoSlideInterval = 5000 }) => {
  const slides = [banner1, banner2];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoSlideTimer = useRef<number | null>(null);
  const progressInterval = useRef<number | null>(null);

  // Clear the auto-slide timer
  const clearTimers = useCallback(() => {
    if (autoSlideTimer.current) {
      window.clearTimeout(autoSlideTimer.current);
      autoSlideTimer.current = null;
    }
    if (progressInterval.current) {
      window.clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  }, []);

  // Set up auto-slide and progress
  const startAutoSlide = useCallback(() => {
    clearTimers();
    
    // Reset progress
    setProgress(0);
    
    // Set up progress interval
    const intervalTime = 100; // Update every 100ms
    const steps = autoSlideInterval / intervalTime;
    const increment = 100 / steps;
    
    progressInterval.current = window.setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);
    
    // Set up slide transition
    autoSlideTimer.current = window.setTimeout(() => {
      goToNextSlide();
    }, autoSlideInterval);
  }, [autoSlideInterval]);

  // Go to next slide
  const goToNextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with CSS transition time
      startAutoSlide();
    }
  }, [isTransitioning, slides.length, startAutoSlide]);

  // Go to previous slide
  const goToPrevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with CSS transition time
      startAutoSlide();
    }
  }, [isTransitioning, slides.length, startAutoSlide]);

  // Go to a specific slide
  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with CSS transition time
      startAutoSlide();
    }
  }, [isTransitioning, currentSlide, startAutoSlide]);

  // Initialize auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => clearTimers();
  }, [startAutoSlide, clearTimers]);

  return (
    <div className="hero-slider">
      <div className="hero-slides-container">
        {slides.map((slide, index) => (
          <Slide 
            key={index} 
            image={slide} 
            active={index === currentSlide} 
            index={index}
          />
        ))}
      </div>

      <div className="slider-controls">
        <button 
          className="slider-arrow prev" 
          onClick={goToPrevSlide}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              disabled={isTransitioning}
            />
          ))}
        </div>
        
        <button 
          className="slider-arrow next" 
          onClick={goToNextSlide}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
      
      <div 
        className="slider-progress" 
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      ></div>
    </div>
  );
};

export default HeroSlider; 