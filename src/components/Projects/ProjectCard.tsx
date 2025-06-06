import { useState } from 'react';
import './ProjectCard.css';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  readMoreLink?: string;
}

const ProjectCard = ({ id, title, description, image, readMoreLink = '#' }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      id={id}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-image-container">
        <img 
          src={image} 
          alt={title} 
          className="project-card-image" 
          loading="lazy"
        />
        <div className="project-card-overlay"></div>
      </div>
      
      <div className={`project-card-content ${isHovered ? 'hovered' : ''}`}>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <a href={readMoreLink} className="project-card-link">
          READ MORE <span className="arrow">»</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 