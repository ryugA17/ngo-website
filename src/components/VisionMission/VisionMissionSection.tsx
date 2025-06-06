import { useRef } from 'react';
import VisionMissionCard from './VisionMissionCard';
import { VisionIcon, MissionIcon, ObjectivesIcon } from './VisionMissionIcons';
import './VisionMissionSection.css';

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section className="vision-mission-section" ref={sectionRef} id="vision-mission">
      <div className="vision-mission-overlay"></div>
      <div className="container">
        <div className="vision-mission-grid">
          <VisionMissionCard
            title="Vision"
            description="Empowerment of the rural poor and enhance standards of living for the underprivileged"
            icon={<VisionIcon />}
            color="#4a90e2"
            delay={0}
            linkHref="#vision"
            onLinkClick={(e) => handleSmoothScroll(e, 'vision')}
          />
          
          <VisionMissionCard
            title="Mission"
            description="To facilitate sustainable development through qualitative Human Resource Development"
            icon={<MissionIcon />}
            color="#8e7cc3"
            delay={200}
            linkHref="#mission"
            onLinkClick={(e) => handleSmoothScroll(e, 'mission')}
          />
          
          <VisionMissionCard
            title="Objectives"
            description="To promote qualitative human resource development through collective efforts of the community"
            icon={<ObjectivesIcon />}
            color="#50C878"
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