import { useState, type ReactNode } from 'react';
import './VisionMissionCard.css';

export interface VisionMissionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color?: string;
  delay?: number;
  linkHref?: string;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const VisionMissionCard = ({
  title,
  description,
  icon,
  color = '#8e7cc3',
  delay = 0,
  linkHref = '#',
  onLinkClick,
}: VisionMissionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="vision-mission-card" 
      style={{ 
        '--card-accent-color': color,
        '--animation-delay': `${delay}ms`,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`vision-mission-card-icon ${isHovered ? 'hovered' : ''}`}>
        {icon}
      </div>
      <h3 className="vision-mission-card-title">{title}</h3>
      <p className="vision-mission-card-description">{description}</p>
      <a 
        href={linkHref} 
        className="vision-mission-card-link"
        onClick={onLinkClick}
      >
        READ MORE <span className="arrow">»</span>
      </a>
    </div>
  );
};

export default VisionMissionCard; 