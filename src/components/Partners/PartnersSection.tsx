import { useRef, useEffect } from 'react';
import './PartnersSection.css';

// Import partner logos
import unicef from '../../assets/unicef.png';
import arthFinance from '../../assets/arth-finance.png';
import saveChildren from '../../assets/save-children.png';
import ficci from '../../assets/ficci.png';
import unido from '../../assets/unido.png';
import undp from '../../assets/undp.png';
import who from '../../assets/who.png';
import sidbi from '../../assets/sidbi.png';
import itcLimited from '../../assets/itc-limited.png';
import nabard from '../../assets/nabard.png';

// Define partner groups for multiple rows
const partnerGroups = [
  [
    { name: 'UNICEF', logo: unicef },
    { name: 'UNDP', logo: undp },
    { name: 'WHO', logo: who },
    { name: 'UNIDO', logo: unido },
    { name: 'Save the Children', logo: saveChildren },
  ],
  [
    { name: 'FICCI', logo: ficci },
    { name: 'SIDBI', logo: sidbi },
    { name: 'NABARD', logo: nabard },
    { name: 'ITC Limited', logo: itcLimited },
    { name: 'Arth Finance', logo: arthFinance },
  ]
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueesRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
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

  // Adjust marquee speed based on screen width
  useEffect(() => {
    const adjustMarqueeSpeed = () => {
      const marquees = document.querySelectorAll('.partners-marquee-inner');
      const speed = window.innerWidth < 768 ? '20s' : '30s';
      
      marquees.forEach((marquee) => {
        (marquee as HTMLElement).style.animationDuration = speed;
      });
    };

    adjustMarqueeSpeed();
    window.addEventListener('resize', adjustMarqueeSpeed);

    return () => {
      window.removeEventListener('resize', adjustMarqueeSpeed);
    };
  }, []);

  return (
    <div className="partners-section" ref={sectionRef} id="partners">
      <div className="container">
        <div className="partners-section-header" ref={headerRef}>
          <h2 className="partners-section-title">Our Partners</h2>
          <div className="partners-section-underline"></div>
          <p className="partners-section-subtitle">
            Proud to collaborate with organizations committed to rural development and social impact
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="partners-marquee-container" ref={marqueesRef}>
        {partnerGroups.map((group, groupIndex) => (
          <div 
            key={`group-${groupIndex}`} 
            className={`partners-marquee ${groupIndex % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="partners-marquee-inner">
              {/* First set of logos */}
              {group.map((partner, index) => (
                <div className="partner-logo-container" key={`${partner.name}-1-${index}`}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="partner-logo"
                    loading="lazy"
                  />
                </div>
              ))}
              
              {/* Duplicate set of logos for seamless scrolling */}
              {group.map((partner, index) => (
                <div className="partner-logo-container" key={`${partner.name}-2-${index}`}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="partner-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection; 