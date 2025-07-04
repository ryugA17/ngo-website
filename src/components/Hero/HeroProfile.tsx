import { useEffect, useRef } from 'react';
import './HeroProfile.css';
import aboutUsImage from '../../assets/aboutus-pic1.jpg';

const HeroProfile = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  // Make profile visible immediately
  useEffect(() => {
    if (profileRef.current) {
      profileRef.current.classList.add('visible');
    }
  }, []);

  return (
    <section className="hero-profile visible" ref={profileRef}>
      <div className="container">
        <div className="profile-content">
          <div className="profile-text">
            <div className="profile-content-wrapper">
              <div className="profile-label">Profile</div>
              <h2>Indian Institute For Rural Development (IIRD)</h2>
              
              <p className="description">
                Founded in 1994 as a non-profit voluntary organization, IIRD aims to provide underprivileged individuals with equal conditions, enhancing their capacity to control their own lives through health, education, economic empowerment and political participation.
              </p>
              
              <p className="description">
                We undertake integrated programmes for the upliftment and economic development of rural stakeholders in Rajasthan, providing backward and forward linkages to strengthen the rural economy through need-based, locality-specific initiatives.
              </p>
              
              <a href="/about" className="learn-more-btn">Learn More</a>
            </div>
          </div>
          
          <div className="profile-image">
            <img 
              src={aboutUsImage} 
              alt="Rural development initiatives" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfile; 