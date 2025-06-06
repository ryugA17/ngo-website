import { useState, useEffect, useRef, useCallback } from 'react';
import './HeroSlider.css';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';

interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
}

interface SlideProps {
  content: SlideContent;
  active: boolean;
  index: number;
}

const Slide: React.FC<SlideProps> = ({ content, active, index }) => {
  return (
    <div 
      className={`hero-slide ${active ? 'active' : ''}`} 
      style={{ 
        backgroundImage: `url(${content.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
      aria-hidden={!active}
      role="img"
      aria-label={`Banner slide ${index + 1}`}
    >
      <div className="slide-overlay"></div>
      {active && (
        <div className="slide-content">
          <h1 className="slide-title">{content.title}</h1>
          <p className="slide-subtitle">{content.subtitle}</p>
          <div className="slide-cta">
            <button className="slide-btn primary">Get Involved</button>
            <button className="slide-btn secondary">Learn More</button>
          </div>
        </div>
      )}
    </div>
  );
};

interface HeroSliderProps {
  autoSlideInterval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ autoSlideInterval = 5000 }) => {
  const slides: SlideContent[] = [
    {
      image: banner1,
      title: "Empowering Communities",
      subtitle: "Creating sustainable change through education, resources, and support"
    },
    {
      image: banner2,
      title: "Building a Better Future",
      subtitle: "Join us in our mission to transform lives and communities"
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
    if (isPaused) return;
    
    clearTimers();
    
    // Reset progress
    setProgress(0);
    
    // Set up progress interval
    const intervalTime = 50; // Update every 50ms for smoother progress
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
  }, [autoSlideInterval, isPaused]);

  // Go to next slide
  const goToNextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Match this with CSS transition time
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
      }, 1000); // Match this with CSS transition time
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
      }, 1000); // Match this with CSS transition time
      startAutoSlide();
    }
  }, [isTransitioning, currentSlide, startAutoSlide]);

  // Handle mouse enter/leave for pausing
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    clearTimers();
  }, [clearTimers]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    startAutoSlide();
  }, [startAutoSlide]);

  // Initialize auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => clearTimers();
  }, [startAutoSlide, clearTimers]);

  return (
    <div 
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-slides-container">
        {slides.map((slide, index) => (
          <Slide 
            key={index} 
            content={slide} 
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