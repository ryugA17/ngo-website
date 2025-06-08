import { useRef, useEffect } from 'react';
import './ApproachSection.css';

interface ApproachPrinciple {
  title: string;
  description: string;
}

const ApproachSection: React.FC = () => {
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

  const principles: ApproachPrinciple[] = [
    {
      title: "Reaching the Unreached",
      description: "To reach the most backward sections of the society for improvement of their living by fulfilling their basic needs of health, safe drinking Water, Sanitation, Elementary and vocational education."
    },
    {
      title: "Integrating the Efforts",
      description: "Mobilizing the efforts of different government, non-government and other agencies or stakeholders under the one roof of development of the community."
    },
    {
      title: "Collaboration and Networking",
      description: "Sharing our expertise of field, learning with non-competitive agencies, Networking and collaborating for achieving the objectives with the agencies having the similar objectives."
    },
    {
      title: "Participatory",
      description: "Increasing participation of stakeholders and community through participatory ownership."
    },
    {
      title: "Grassroots Connection",
      description: "The participatory process followed at IIRD that forges immediate and meaningful linkages and encourages formal and informal dialogue with the grassroots level has built strong relationship with stakeholders which translates to ability to reach people and contribute to overall development for stakeholders."
    },
    {
      title: "Gender Perspective",
      description: "Our unique advantage that the future recognition should be given to the emerging consideration that women make to the family, society and development. Our commitment to integrating gender perspective is reflected in our work plan and budgeting as well as in technical cooperation activities."
    }
  ];

  return (
    <section className="approach-section" ref={sectionRef} id="approach">
      <div className="container">
        <div className="approach-header">
          <h2 className="section-title animate-fade-in">About Us</h2>
          <div className="section-underline"></div>
          <h3 className="approach-subtitle animate-fade-in delay-100">IIRD Approach To Development</h3>
        </div>

        <div className="approach-intro animate-fade-in delay-200">
          <p>Exploring grassroots level realities, through extensive stakeholder approach, need assessment studies, baseline surveys, and research</p>
          <p>In its approach to grassroots development, IIRD builds itself on the following principles:</p>
        </div>

        <div className="approach-principles" ref={contentRef}>
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className={`principle-card animate-fade-in delay-${(index + 2) * 100}`}
            >
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="approach-methods animate-fade-in delay-300">
          <h3 className="methods-title">Our Intervention Methods</h3>
          
          <div className="methods-grid">
            <div className="method-item">
              <h4>Building Trust with Communities</h4>
              <p>Decades of our field work and efforts have created regular interaction with the communities. We have increased our "social capital" by providing people with opportunities to build trust and work with the capacity to work together toward common goals.</p>
            </div>
            
            <div className="method-item">
              <h4>Networking and Linkages</h4>
              <p>Strengthening linkages and building partnerships between private and public sectors is a viable way of promoting local governance. Enhancing and making use of strategic alliance of cooperation has proven a good strategy in the field of water development.</p>
            </div>
            
            <div className="method-item">
              <h4>Approach in Field Intervention</h4>
              <p>The organization believes in providing a common platform to work towards an integrated development model. It explores grassroots level realities, through extensive stakeholder approach, need assessment studies, baseline surveys, and research.</p>
            </div>
          </div>
        </div>

        <div className="approach-capabilities animate-fade-in delay-400">
          <h3 className="capabilities-title">Our Capabilities</h3>
          
          <ul className="capabilities-list">
            <li>
              <strong>Need Assessment:</strong> Conducting surveys for assessment of infrastructure needs and mapping the existing conditions.
            </li>
            <li>
              <strong>Information, Education & Communication:</strong> For better environment & sustainable condition, quality education and development.
            </li>
            <li>
              <strong>Capacity Building:</strong> For self-development in reproductive health care including family planning & safe motherhood, agriculture, animal husbandry, fishery and entrepreneurship.
            </li>
            <li>
              <strong>Quality Management:</strong> Care for the stakeholders in their need areas. Monitoring and evaluation. The programmes being run by the State, Central Government and the other agencies in the sector.
            </li>
            <li>
              <strong>Organizing Seminars/Workshops:</strong> On the issues related to the field of concern persons.
            </li>
            <li>
              <strong>Publications:</strong> Preparation of training Modules and Teaching Learning Material, Reports, Books, Booklets etc.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 