import { useRef, useEffect } from 'react';
import aboutUsImage from '../../assets/aboutus-pic1.jpg';
import './ProfileSection.css';

const ProfileSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Add intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="profile-section" ref={sectionRef} id="profile">
      <div className="profile-header">
        <h2 className="section-title">
          About Us
          <div className="section-underline"></div>
        </h2>
        <h3 className="profile-subtitle">Profile</h3>
      </div>

      <div className="container">
        <div className="profile-content" ref={contentRef}>
          <div className="profile-image-container animate-slide-right">
            <img 
              src={aboutUsImage} 
              alt="IIRD Team working in rural community" 
              className="profile-image"
              loading="lazy"
            />
            <div className="profile-image-overlay">
              <span>Established in 1994</span>
            </div>
          </div>

          <div className="profile-text animate-slide-left">
            <p className="profile-paragraph">
              Indian Institute for Rural Development (IIRD) was established in 1994 as a non-profit voluntary organization with an aim to further the wellbeing of rural communities in Rajasthan. The Indian Institute for Rural Development (IIRD) was founded with the aim to provide the most under-privileged individuals with equal conditions, enhancing their capacity to control their own lives: health, education, economic empowerment and political participation and thus allowing them to take a life of dignity.
            </p>
            
            <p className="profile-paragraph">
              IIRD undertakes integrated programmes for the upliftment and economic development of rural stakeholders in the villages of Rajasthan and providing backward and forward linkages to the rural economy. Through its non-rigid, locality specific, felt need-based, beneficiary oriented and committed nature of service, it has established multitude of roles which affects rural development.
            </p>
            
            <p className="profile-paragraph">
              In its early years of existence, IIRD acted as an evaluating, training and nodal agency for projects focused on Health and Sanitation issues. Through the collaborative implementation of various projects with different partners, it gained valuable experience in training and facilitating training sessions, developing IEC Information, Education and Communication material, coordinating and providing technical support to implementing agencies and conducting surveys and evaluation studies.
            </p>

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">600+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">States Covered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-mission-vision">
          <div className="mission-vision-item animate-fade-in delay-200">
            <h3 className="mission-vision-title">Vision</h3>
            <p className="mission-vision-text">
              Empowerment of the rural poor and enhance standards of living for the underprivileged.
            </p>
          </div>
          <div className="mission-vision-item animate-fade-in delay-300">
            <h3 className="mission-vision-title">Mission</h3>
            <p className="mission-vision-text">
              To facilitate sustainable development through qualitative Human Resource Development, people's participation leading to the resolution of societal problems including empowerment of the unreached and underprivileged.
            </p>
          </div>
        </div>

        <div className="profile-objectives animate-fade-in delay-400">
          <h3 className="objectives-title">Objectives</h3>
          <ul className="objectives-list">
            <li>To promote qualitative human resource development through collective efforts of the community</li>
            <li>To promote access to essential services for the underdeveloped segment of society, especially women</li>
            <li>To develop the Institute as a nodal center for development planning, management and evaluation</li>
            <li>To dialogue and network with the like-minded organizations in the public, private and development sector</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection; 