import { useRef, useEffect } from 'react';
import VisionMissionCard from './VisionMissionCard';
import { VisionIcon, MissionIcon, ObjectivesIcon } from './VisionMissionIcons';
import './VisionMissionSection.css';

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for navbar
        behavior: 'smooth'
      });
    }
  };

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
    <section className="vision-mission-section" ref={sectionRef} id="vision-mission">
      <div className="vision-mission-overlay"></div>
      <div className="container">
        <h2 className="section-title animate-fade-in">Our Vision & Mission</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle animate-fade-in delay-100">
          We are committed to creating lasting change through sustainable development and community empowerment.
        </p>
        
        <div className="vision-mission-grid" ref={cardsRef}>
          <VisionMissionCard
            title="Vision"
            description="Empowerment of the rural poor and enhance standards of living for the underprivileged"
            icon={<VisionIcon />}
            color="var(--primary-color)"
            delay={0}
            linkHref="#vision"
            onLinkClick={(e) => handleSmoothScroll(e, 'vision')}
          />
          
          <VisionMissionCard
            title="Mission"
            description="To facilitate sustainable development through qualitative Human Resource Development"
            icon={<MissionIcon />}
            color="var(--secondary-color)"
            delay={200}
            linkHref="#mission"
            onLinkClick={(e) => handleSmoothScroll(e, 'mission')}
          />
          
          <VisionMissionCard
            title="Objectives"
            description="To promote qualitative human resource development through collective efforts of the community"
            icon={<ObjectivesIcon />}
            color="var(--accent-color)"
            delay={400}
            linkHref="#objectives"
            onLinkClick={(e) => handleSmoothScroll(e, 'objectives')}
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection; 