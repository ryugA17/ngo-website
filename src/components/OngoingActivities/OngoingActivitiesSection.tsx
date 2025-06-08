import { useRef, useEffect, useState } from 'react';
import './OngoingActivitiesSection.css';

interface Project {
  id: number;
  name: string;
  location: string;
  fundingAgency: string;
  startDate: string;
  status: string;
  coordinator: string;
}

const OngoingActivitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

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

  const projects: Project[] = [
    {
      id: 1,
      name: "Women Initiative for Skills, Employment and Empowerment (WISEE)",
      location: "Jhalawar",
      fundingAgency: "IIRD, JTC, MGNREGA",
      startDate: "08-3-2017",
      status: "Ongoing",
      coordinator: "Devilal kashyap"
    },
    {
      id: 2,
      name: "Mukhyamantri jhalawlamban yojana",
      location: "Jhalawar",
      fundingAgency: "Zila Parishad Jhalawar, government of rajasthan",
      startDate: "08-3-2017",
      status: "Ongoing",
      coordinator: "Parmanand Agrawal"
    },
    {
      id: 3,
      name: "E-Shakti",
      location: "Jhalawar District",
      fundingAgency: "NABARD",
      startDate: "22/6/2016",
      status: "Ongoing",
      coordinator: "Jitendra Sharma"
    },
    {
      id: 4,
      name: "FPO",
      location: "Jhalawar, Baran",
      fundingAgency: "NABARD",
      startDate: "24/3/2015",
      status: "Ongoing",
      coordinator: "Ramkalyan Gurjar"
    },
    {
      id: 5,
      name: "MFPP",
      location: "Jhalawar District",
      fundingAgency: "SIDBI",
      startDate: "7/4/2014",
      status: "Ongoing",
      coordinator: "Jitendra Sharma"
    },
    {
      id: 6,
      name: "IWMP, Malpura",
      location: "Malpura Block, District Tonk",
      fundingAgency: "Zila Parishad, Tonk, GOR",
      startDate: "23/4/2012",
      status: "Ongoing",
      coordinator: "Shyam Bihari Sharma"
    },
    {
      id: 7,
      name: "Sahariya Housing",
      location: "Shahbad Block, District Baran",
      fundingAgency: "GOR & CCD",
      startDate: "11/7/2013",
      status: "Ongoing",
      coordinator: "Suraj Khangar"
    },
    {
      id: 8,
      name: "Innovative (i) SSAW (SahariyaSanskrit) and AajivikaVikas Vartika (ii) Parivaran (MahilaVarshak Club)",
      location: "Shahbad Block, District Baran",
      fundingAgency: "GOR & CCD",
      startDate: "11/7/2013",
      status: "Ongoing",
      coordinator: "Suraj Khangar"
    },
    {
      id: 9,
      name: "MGNREGA",
      location: "Bakani Block",
      fundingAgency: "GOR & ITC",
      startDate: "13/3/2012",
      status: "Ongoing",
      coordinator: "Devilal kashyap"
    },
    {
      id: 10,
      name: "Integrated Water Management Project (IWMP)",
      location: "Bakani Block",
      fundingAgency: "GOR & ITC",
      startDate: "24/12/2012",
      status: "Ongoing",
      coordinator: "Jasveer Singh"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.fundingAgency.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.coordinator.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterCategory === 'all') return matchesSearch;
    if (filterCategory === 'nabard') return matchesSearch && project.fundingAgency.toLowerCase().includes('nabard');
    if (filterCategory === 'gor') return matchesSearch && project.fundingAgency.toLowerCase().includes('gor');
    if (filterCategory === 'sidbi') return matchesSearch && project.fundingAgency.toLowerCase().includes('sidbi');
    
    return matchesSearch;
  });

  return (
    <section className="activities-section" ref={sectionRef} id="ongoing-activities">
      <div className="container">
        <div className="activities-header">
          <h2 className="section-title animate-fade-in">About Us</h2>
          <div className="section-underline"></div>
          <h3 className="activities-subtitle animate-fade-in delay-100">Ongoing Activities</h3>
        </div>

        <div className="activities-intro animate-fade-in delay-200">
          <p>
            IIRD is currently engaged in multiple projects across different regions, focusing on sustainable development, skill enhancement, women empowerment, water management, and rural livelihood improvement.
          </p>
        </div>

        <div className="activities-filter animate-fade-in delay-300">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filterCategory === 'all' ? 'active' : ''}`}
              onClick={() => setFilterCategory('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filterCategory === 'nabard' ? 'active' : ''}`}
              onClick={() => setFilterCategory('nabard')}
            >
              NABARD
            </button>
            <button 
              className={`filter-btn ${filterCategory === 'gor' ? 'active' : ''}`}
              onClick={() => setFilterCategory('gor')}
            >
              GOR
            </button>
            <button 
              className={`filter-btn ${filterCategory === 'sidbi' ? 'active' : ''}`}
              onClick={() => setFilterCategory('sidbi')}
            >
              SIDBI
            </button>
          </div>
        </div>

        <div className="activities-table-container animate-fade-in delay-400" ref={contentRef}>
          <table className="activities-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name of Project</th>
                <th>Location</th>
                <th>Funding Agency</th>
                <th>Start</th>
                <th>Status</th>
                <th>Project Coordinator</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={project.id} className={`project-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                  <td>{index + 1}</td>
                  <td>{project.name}</td>
                  <td>{project.location}</td>
                  <td>{project.fundingAgency}</td>
                  <td>{project.startDate}</td>
                  <td>
                    <span className="status-badge">{project.status}</span>
                  </td>
                  <td>{project.coordinator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="activities-summary animate-fade-in delay-500">
          <h3 className="summary-title">Project Summary</h3>
          
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Active Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Funding Partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Districts Covered</span>
            </div>
          </div>
          
          <p className="summary-text">
            Our ongoing activities are focused on creating sustainable impact in rural communities through participatory approaches, capacity building, and innovative solutions to local challenges. We work closely with government agencies, funding partners, and local communities to ensure the success and sustainability of our projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OngoingActivitiesSection; 