import { useRef, useEffect } from 'react';
import './GeographicalOutreachSection.css';

interface Region {
  state: string;
  districts: string[];
}

const GeographicalOutreachSection: React.FC = () => {
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

  const regions: Region[] = [
    {
      state: 'Rajasthan',
      districts: ['Alwar', 'Jaipur', 'Tonk', 'Kota', 'Baran', 'Bundi', 'Jhalawar']
    },
    {
      state: 'Gujarat',
      districts: ['Kutch districts']
    },
    {
      state: 'Madhya Pradesh',
      districts: ['Chanderi', 'Ashok Nagar district', 'Shivpuri', 'Mandia', 'Raipur', 'Guna', 'Jhabua districts']
    },
    {
      state: 'Maharashtra',
      districts: ['Ratnagiri district']
    },
    {
      state: 'Himachal Pradesh',
      districts: ['Shimla', 'Hamirpur', 'Solan', 'Chamba', 'Una districts']
    },
    {
      state: 'Uttar Pradesh',
      districts: ['Mirzapur', 'Farrukhabad', 'Unnao districts', 'Mansa district']
    },
    {
      state: 'Bihar',
      districts: ['Kishanganj district']
    },
    {
      state: 'Uttaranchal',
      districts: ['Haridwar district']
    },
    {
      state: 'Punjab',
      districts: ['Various districts']
    }
  ];

  return (
    <section className="geographical-section" ref={sectionRef} id="geographical-outreach">
      <div className="container">
        <div className="geographical-header">
          <h2 className="section-title animate-fade-in">About Us</h2>
          <div className="section-underline"></div>
          <h3 className="geographical-subtitle animate-fade-in delay-100">Geographical Outreach</h3>
        </div>

        <div className="geographical-intro animate-fade-in delay-200">
          <p>
            IIRD has worked throughout India, with a marked focus on the states of Rajasthan, Madhya Pradesh, Gujarat, Maharashtra, Himachal Pradesh, Punjab, Uttar Pradesh, Bihar and Uttaranchal.
          </p>
          <p>
            Its focused areas, as a monitoring and evaluating agency, include the following:
          </p>
        </div>

        <div className="geographical-map-container animate-fade-in delay-300">
          <div className="india-map">
            <div className="map-highlight"></div>
          </div>
        </div>

        <div className="geographical-regions" ref={contentRef}>
          {regions.map((region, index) => (
            <div 
              key={index} 
              className={`region-card animate-fade-in delay-${(index + 2) * 100}`}
            >
              <h3 className="region-title">{region.state}</h3>
              <ul className="region-districts">
                {region.districts.map((district, idx) => (
                  <li key={idx}>{district}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="geographical-focus animate-fade-in delay-400">
          <h3 className="focus-title">Key Focus Areas</h3>
          <p>In Rajasthan, we concentrate our development efforts on the Hadauti Region, which include Jhalawar, Kota, Bundi, Baran and Jaipur.</p>
          
          <div className="focus-stats">
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">States</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Districts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Villages</span>
            </div>
          </div>
        </div>

        <div className="geographical-impact animate-fade-in delay-500">
          <h3 className="impact-title">Our Impact</h3>
          <p>
            Through our extensive geographical outreach, IIRD has been able to create meaningful impact in rural communities across India. Our presence in multiple states allows us to understand diverse regional challenges and implement tailored solutions that address specific local needs.
          </p>
          <p>
            By establishing strong networks in these regions, we have built lasting relationships with local communities, government bodies, and other stakeholders, enabling us to drive sustainable development initiatives that create positive change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeographicalOutreachSection; 