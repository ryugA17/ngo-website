import { useRef, useEffect } from 'react';
import unicef from '../../assets/unicef.png';
import nabard from '../../assets/nabard.png';
import who from '../../assets/who.png';
import sidbi from '../../assets/sidbi.png';
import undp from '../../assets/undp.png';
import unido from '../../assets/unido.png';
import ficci from '../../assets/ficci.png';
import saveChildren from '../../assets/save-children.png';
import arthFinance from '../../assets/arth-finance.png';
import './PartnersInGrowthSection.css';

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

const PartnersInGrowthSection: React.FC = () => {
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

  const partners: Partner[] = [
    { name: 'UNICEF', logo: unicef, website: 'https://www.unicef.org/' },
    { name: 'NABARD', logo: nabard, website: 'https://www.nabard.org/' },
    { name: 'World Health Organization', logo: who, website: 'https://www.who.int/' },
    { name: 'SIDBI', logo: sidbi, website: 'https://www.sidbi.in/' },
    { name: 'UNDP', logo: undp, website: 'https://www.undp.org/' },
    { name: 'UNIDO', logo: unido, website: 'https://www.unido.org/' },
    { name: 'FICCI', logo: ficci, website: 'https://ficci.in/' },
    { name: 'Save the Children', logo: saveChildren, website: 'https://www.savethechildren.org/' },
    { name: 'Arth Finance', logo: arthFinance, website: 'https://www.arthfinance.com/' }
  ];

  return (
    <section className="partners-section" ref={sectionRef} id="partners-in-growth">
      <div className="container">
        <div className="partners-header">
          <h2 className="section-title animate-fade-in">About Us</h2>
          <div className="section-underline"></div>
          <h3 className="partners-subtitle animate-fade-in delay-100">Partners In Growth</h3>
        </div>

        <div className="partners-intro animate-fade-in delay-200">
          <p>
            IIRD has established active cooperation with national and international partners like the Government of Rajasthan (GoR), Small Industries Development Bank of India (SIDBI), NABARD, UNICEF, UNIDO, World Bank and the World Health Organization (WHO).
          </p>
          <p>
            Moreover, field offices and skilled and motivated professionals also became a part of IIRD, who worked in close contact with our rural branches. With its head office in Jaipur and eleven field offices in the districts of Tonk, Bundi, Baran and Jhalawar in Rajasthan.
          </p>
        </div>

        <div className="partners-grid" ref={contentRef}>
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`partner-card animate-fade-in delay-${(index + 1) * 100}`}
            >
              <div className="partner-logo-container">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
              {partner.website && (
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="partner-link"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="partnership-benefits animate-fade-in delay-300">
          <h3 className="benefits-title">Benefits of Our Partnerships</h3>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Knowledge Sharing</h4>
              <p>Our partnerships enable us to share knowledge, best practices, and innovative approaches to rural development challenges.</p>
            </div>
            
            <div className="benefit-item">
              <h4>Resource Mobilization</h4>
              <p>Through strategic partnerships, we can mobilize resources more effectively to implement impactful programs in rural communities.</p>
            </div>
            
            <div className="benefit-item">
              <h4>Extended Reach</h4>
              <p>Partnerships allow us to extend our reach to more communities and beneficiaries across different regions.</p>
            </div>
            
            <div className="benefit-item">
              <h4>Sustainable Impact</h4>
              <p>Collaborative efforts with our partners ensure that our initiatives have lasting and sustainable impact on the communities we serve.</p>
            </div>
          </div>
        </div>

        <div className="partnership-cta animate-fade-in delay-400">
          <h3>Become Our Partner</h3>
          <p>Join us in our mission to empower rural communities and create sustainable development solutions.</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default PartnersInGrowthSection; 