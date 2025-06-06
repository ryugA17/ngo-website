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
            <div className="profile-content-wrapper">
              <div className="profile-label">PROFILE</div>
              <h2>
                Indian Institute For Rural Development (IIRD) Was Established In 1994 As A Non-Profit Voluntary Organization
              </h2>
              
              <p className="description">
                The Indian Institute for Rural Development (IIRD) was founded with the aim to provide the most underprivileged individuals with equal conditions, enhancing their capacity to control their own lives, health, education, economic empowerment and political participation and thus allowing them to lead a life of dignity.
              </p>
              
              <p className="description">
                IIRD undertakes integrated programmes for the upliftment and economic development of rural stakeholders in the villages of Rajasthan and providing backward and forward linkages to the rural economy. Through its non-rigid, locality specific, felt need-based, beneficiary oriented and committed nature of service, it has established multitude of roles which effects rural development.
              </p>
            </div>
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