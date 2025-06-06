import { useEffect, useRef } from 'react';
import './HeroProfile.css';
import aboutUsImage from '../../assets/aboutus-pic1.jpg';

const HeroProfile = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  // Add scroll reveal animation
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

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-profile" ref={profileRef}>
      <div className="container">
        <div className="profile-content">
          <div className="profile-text">
            <h2>Empowering Rural Communities</h2>
            <p className="subtitle">Working together for sustainable development</p>
            
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <button className="learn-more-btn">Learn More</button>
          </div>
          
          <div className="profile-image">
            <img 
              src={aboutUsImage} 
              alt="Rural development initiatives" 
              loading="lazy"
              width="500"
              height="350"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfile; 