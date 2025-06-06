import { useState, useEffect, useRef } from 'react';
import './HeroStats.css';

interface StatProps {
  value: number;
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ 
  value, 
  label, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCount();
      }
    }, { threshold: 0.1 });

    if (countRef.current) {
      observer.current.observe(countRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const animateCount = () => {
    const start = 0;
    const end = value;
    
    // Calculate increment based on the size of the number
    // Larger numbers need larger increments to finish in time
    const increment = Math.max(1, Math.floor(end / 100));
    const stepTime = Math.abs(Math.floor(duration / (end / increment)));
    
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);
  };

  return (
    <div className="stat-item">
      <div className="stat-value">
        <span>{prefix}</span>
        <span ref={countRef}>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const HeroStats = () => {
  return (
    <div className="hero-stats">
      <div className="container">
        <div className="stats-container">
          <Stat value={500} label="Villages Covered" suffix="+" />
          <Stat value={25} label="Years of Experience" suffix="+" />
          <Stat value={75} label="Ongoing Projects" />
          <Stat value={10000} label="Lives Impacted" suffix="+" />
        </div>
      </div>
    </div>
  );
};

export default HeroStats; 