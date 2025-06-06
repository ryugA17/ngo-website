import { useState, useEffect, useRef, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './ProjectsData';
import './ProjectSlider.css';

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesPerView = useGetSlidesPerView();
  
  // Function to get number of slides per view based on screen width
  function useGetSlidesPerView() {
    const [slidesPerView, setSlidesPerView] = useState(3);
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 576) {
          setSlidesPerView(1);
        } else if (window.innerWidth < 992) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(3);
        }
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return slidesPerView;
  }

  // Handle auto play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

  // Reset auto play when user interacts
  const resetAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      setIsAutoPlaying(true);
    }
  }, []);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => 
      prev === projectsData.length - slidesPerView ? 0 : prev + 1
    );
    resetAutoPlay();
  }, [resetAutoPlay, slidesPerView]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => 
      prev === 0 ? projectsData.length - slidesPerView : prev - 1
    );
    resetAutoPlay();
  }, [resetAutoPlay, slidesPerView]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    
    if (diffX > 50) {
      nextSlide();
    } else if (diffX < -50) {
      prevSlide();
    }
    
    setIsAutoPlaying(true);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <div className="project-slider-section" ref={sliderRef}>
      <div className="container">
        <div className="project-slider-header">
          <h2 className="project-slider-title">Rural Development Projects</h2>
          <div className="project-slider-underline"></div>
        </div>
        
        <div 
          className="project-slider-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            className="project-slider-arrow project-slider-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          
          <div className="project-slider-track-container">
            <div 
              className="project-slider-track" 
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                gridTemplateColumns: `repeat(${projectsData.length}, calc(100% / ${slidesPerView}))`
              }}
            >
              {projectsData.map((project) => (
                <div className="project-slider-slide" key={project.id}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    readMoreLink={project.readMoreLink}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="project-slider-arrow project-slider-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
        
        <div className="project-slider-dots">
          {Array.from({ length: projectsData.length - slidesPerView + 1 }).map((_, index) => (
            <button
              key={index}
              className={`project-slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider; 