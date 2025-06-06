import { useRef, useEffect } from 'react';
import VisionMissionCard from './VisionMissionCard';
import { VisionIcon, MissionIcon, ObjectivesIcon } from './VisionMissionIcons';
import './VisionMissionSection.css';

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section className="vision-mission-section" ref={sectionRef}>
      <div className="vision-mission-overlay"></div>
      <div className="container">
        <div className="vision-mission-grid">
          <VisionMissionCard
            title="Vision"
            description="Empowerment of the rural poor and enhance standards of living for the underprivileged"
            icon={<VisionIcon />}
            color="#4a90e2"
            delay={0}
          />
          
          <VisionMissionCard
            title="Mission"
            description="To facilitate sustainable development through qualitative Human Resource Development"
            icon={<MissionIcon />}
            color="#8e7cc3"
            delay={200}
          />
          
          <VisionMissionCard
            title="Objectives"
            description="To promote qualitative human resource development through collective efforts of the community"
            icon={<ObjectivesIcon />}
            color="#50C878"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection; 