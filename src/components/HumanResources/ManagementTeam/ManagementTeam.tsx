import React from 'react';
import './ManagementTeam.css';

interface ManagementTeamMember {
  srNo: number;
  name: string;
  designation: string;
  experience: string;
}

const ManagementTeam: React.FC = () => {
  // Management team data from the images
  const managementTeamMembers: ManagementTeamMember[] = [
    {
      srNo: 1,
      name: 'Parmodkumarpaliwal',
      designation: 'Chairman',
      experience: '35 years'
    },
    {
      srNo: 2,
      name: 'KuldeepkumarArora',
      designation: 'Secretary',
      experience: '29 Years'
    },
    {
      srNo: 3,
      name: 'Aditi Sharma',
      designation: 'Treasurer',
      experience: '3 years'
    },
    {
      srNo: 4,
      name: 'Parmanand Agarwal',
      designation: 'Project Director',
      experience: '23 years'
    },
    {
      srNo: 5,
      name: 'M.S.Acharya',
      designation: 'Project director',
      experience: '10 years'
    },
    {
      srNo: 6,
      name: 'Mahesh Jakhotia',
      designation: 'Account officer',
      experience: '9 years'
    },
    {
      srNo: 7,
      name: 'Hukam Singh kharwal',
      designation: 'Admin officer',
      experience: '25 years'
    },
    {
      srNo: 8,
      name: 'Jatin Paliwal',
      designation: 'Filed Expert',
      experience: '12 Years'
    }
  ];

  return (
    <div className="management-team-section">
      <div className="page-header">
        <h1>MANAGEMENT TEAM</h1>
      </div>
      <div className="breadcrumb">
        <a href="/" className="home-link">
          <i className="fa fa-home"></i> HOME
        </a>
        <span className="separator">o</span>
        <span className="current-page">MANAGEMENT TEAM</span>
      </div>
      
      <div className="container management-team-container">
        <div className="table-responsive">
          <table className="management-team-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {managementTeamMembers.map((member) => (
                <tr key={member.srNo}>
                  <td>{member.srNo}.</td>
                  <td>{member.name}</td>
                  <td>{member.designation}</td>
                  <td>{member.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Team Member Cards */}
        <div className="team-member-cards">
          <div className="row">
            {/* Parmod Kumar Paliwal */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">01</div>
                <h3 className="member-name">Parmod Kumar Paliwal</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Chairman</p>
                  <p><strong>Education:</strong> MA (Business Administration)</p>
                  <p><strong>Experience:</strong> 29 Years</p>
                  <p><strong>Email id:</strong> sird@siird.org</p>
                  <p><strong>Mobile no.:</strong> 9414795501</p>
                </div>
              </div>
            </div>
            
            {/* Kuldeep Kumar Arora */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">02</div>
                <h3 className="member-name">Kuldeep Kumar Arora</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Secretary</p>
                  <p><strong>Education:</strong> PDDRM</p>
                  <p><strong>Experience:</strong> 16 years</p>
                  <p><strong>Email id:</strong> Kuldeep1234@gmail.com</p>
                  <p><strong>Mobile no.:</strong> 9414079505</p>
                </div>
              </div>
            </div>
            
            {/* Aditi Sharma */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">03</div>
                <h3 className="member-name">Aditi Sharma</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Treasurer</p>
                  <p><strong>Education:</strong> MBA</p>
                  <p><strong>Experience:</strong> 3 Years</p>
                  <p><strong>Email id:</strong> aditi.sharma@gmail.com</p>
                  <p><strong>Mobile no.:</strong></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            {/* Satya Narayan Singh */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">04</div>
                <h3 className="member-name">Satya Narayan Singh</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Asst. Director</p>
                  <p><strong>Specialization:</strong> Cluster Development</p>
                  <p><strong>Experience:</strong> 18 Years</p>
                  <p><strong>Email id:</strong> sird@siird.org</p>
                  <p><strong>Mobile no.:</strong> 9928876526</p>
                </div>
              </div>
            </div>
            
            {/* Mahesh Jakhotia */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">05</div>
                <h3 className="member-name">Mahesh Jakhotia</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Manager - Account</p>
                  <p><strong>Education:</strong> CA (Inter)</p>
                  <p><strong>Experience:</strong> 12 Years</p>
                  <p><strong>Email id:</strong> ho@arthfinance.com</p>
                  <p><strong>Mobile no.:</strong> 9001793811</p>
                </div>
              </div>
            </div>
            
            {/* Hukam Singh Kharwal */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">06</div>
                <h3 className="member-name">Hukam Singh Kharwal</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Administrative Officer</p>
                  <p><strong>Education:</strong> Bachelor of Art, MDP</p>
                  <p><strong>Experience:</strong> 21 Years</p>
                  <p><strong>Email id:</strong> irdjpr@gmail.com</p>
                  <p><strong>Mobile no.:</strong> 9001998664</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            {/* Parmanand Agrawal */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">07</div>
                <h3 className="member-name">Parmanand Agrawal</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Technical Expert</p>
                  <p><strong>Education:</strong> BE</p>
                  <p><strong>Experience:</strong> 12 Years</p>
                  <p><strong>Email id:</strong> sirdivn@gmail.com</p>
                  <p><strong>Mobile no.:</strong> 9001798166</p>
                </div>
              </div>
            </div>
            
            {/* Dr. M.S. Acharya */}
            <div className="col-md-4 team-card">
              <div className="team-member-card">
                <div className="member-number">08</div>
                <h3 className="member-name">Dr. M.S. Acharya</h3>
                <div className="member-details">
                  <p><strong>Designation:</strong> Project Director</p>
                  <p><strong>Education:</strong> M.Sc. Ph.D</p>
                  <p><strong>Experience:</strong> 32 Years</p>
                  <p><strong>Email id:</strong> sird@siird.org</p>
                  <p><strong>Mobile no.:</strong> 9414079503</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam; 