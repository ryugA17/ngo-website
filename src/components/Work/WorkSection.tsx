import React, { useRef, useEffect } from 'react';
import ProjectCard from '../Projects/ProjectCard';
import './WorkSection.css';

// Import images
import work1 from '../../assets/work 2.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work 3.jpg';

const workData = [
  {
    id: 'rural-development',
    title: 'Rural Development',
    description: 'In a bid to include the neglected masses of rural poor in the process of increasing the well-being of mankind, IIRD concerns itself with economic growth and social justice.',
    image: work1,
    readMoreLink: '#rural-development'
  },
  {
    id: 'welcome-to-iird',
    title: 'Welcome To IIRD',
    description: 'The Indian Institute of Rural Development (IIRD) was founded with the aim to provide the most underprivileged individuals with equal conditions, enhancing their capacity.',
    image: work2,
    readMoreLink: '#welcome-to-iird'
  },
  {
    id: 'volunteer-with-us',
    title: 'Volunteer With Us',
    description: 'IIRD Volunteers work hard developing valuable skills and friendships along the way. Time is precious. Use yours to do something important.',
    image: work3,
    readMoreLink: '#volunteer-with-us'
  }
];

const WorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div className="work-section" ref={sectionRef}>
      <div className="container">
        <div className="work-section-header">
          <h2 className="work-section-title">Our Work</h2>
          <div className="work-section-underline"></div>
        </div>
        
        <div className="work-cards-container">
          {workData.map((work) => (
            <div className="work-card-wrapper" key={work.id}>
              <ProjectCard
                id={work.id}
                title={work.title}
                description={work.description}
                image={work.image}
                readMoreLink={work.readMoreLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection; 