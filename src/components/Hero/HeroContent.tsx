import { useState, useEffect } from 'react';
import './HeroContent.css';

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation slightly for better effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
      <h1>Empowering Rural Communities</h1>
      <p>Working together for sustainable development and positive change</p>
      <button className="cta-button">LEARN MORE</button>
    </div>
  );
};

export default HeroContent; 