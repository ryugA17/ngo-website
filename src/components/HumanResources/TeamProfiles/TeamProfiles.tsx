import React, { useRef, useEffect } from 'react';
import './TeamProfiles.css';

interface TeamMemberProfile {
  id: number;
  name: string;
  designation: string;
  education: string;
  experience: string;
  email: string;
  mobile: string;
  specialization?: string;
  image?: string;
}

const TeamProfiles: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Team member profiles data
  const teamProfiles: TeamMemberProfile[] = [
    {
      id: 1,
      name: 'Parmod Kumar Paliwal',
      designation: 'Chairman',
      education: 'MA (Business Administration)',
      experience: '29 Years',
      email: 'sird@siird.org',
      mobile: '9414795501'
    },
    {
      id: 2,
      name: 'Kuldeep Kumar Arora',
      designation: 'Secretary',
      education: 'PDDRM',
      experience: '16 years',
      email: 'Kuldeep1234@gmail.com',
      mobile: '9414079505'
    },
    {
      id: 3,
      name: 'Aditi Sharma',
      designation: 'Treasurer',
      education: 'MBA',
      experience: '3 Years',
      email: 'aditi.sharma@gmail.com',
      mobile: ''
    },
    {
      id: 4,
      name: 'Satya Narayan Singh',
      designation: 'Asst. Director',
      education: '',
      experience: '18 Years',
      email: 'sird@siird.org',
      mobile: '9928876526',
      specialization: 'Cluster Development'
    },
    {
      id: 5,
      name: 'Mahesh Jakhotia',
      designation: 'Manager - Account',
      education: 'CA (Inter)',
      experience: '12 Years',
      email: 'ho@arthfinance.com',
      mobile: '9001793811'
    },
    {
      id: 6,
      name: 'Hukam Singh Kharwal',
      designation: 'Administrative Officer',
      education: 'Bachelor of Art, MDP',
      experience: '21 Years',
      email: 'irdjpr@gmail.com',
      mobile: '9001998664'
    },
    {
      id: 7,
      name: 'Parmanand Agrawal',
      designation: 'Technical Expert',
      education: 'BE',
      experience: '12 Years',
      email: 'sirdivn@gmail.com',
      mobile: '9001798166'
    },
    {
      id: 8,
      name: 'Dr. M.S. Acharya',
      designation: 'Project Director',
      education: 'M.Sc. Ph.D',
      experience: '32 Years',
      email: 'sird@siird.org',
      mobile: '9414079503'
    }
  ];

  return (
    <section className="team-profiles-section" ref={sectionRef} id="team-profiles">
      <div className="container">
        <div className="team-header">
          <h2 className="section-title animate-fade-in">Human Resources</h2>
          <div className="section-underline"></div>
          <h3 className="team-subtitle animate-fade-in delay-100">Team Profiles</h3>
        </div>
        
        <div className="team-profiles-grid animate-fade-in delay-200">
          {teamProfiles.map((profile) => (
            <div className="profile-card" key={profile.id}>
              <div className="profile-header">
                <div className="profile-number">{String(profile.id).padStart(2, '0')}</div>
                <div className="profile-icon"></div>
              </div>
              <div className="profile-content">
                <h3 className="profile-name">{profile.name}</h3>
                <div className="profile-details">
                  <p><strong>Designation:</strong> {profile.designation}</p>
                  {profile.education && <p><strong>Education:</strong> {profile.education}</p>}
                  {profile.specialization && <p><strong>Specialization:</strong> {profile.specialization}</p>}
                  <p><strong>Experience:</strong> {profile.experience}</p>
                  <p><strong>Email id:</strong> {profile.email}</p>
                  <p><strong>Mobile no.:</strong> {profile.mobile}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles; 