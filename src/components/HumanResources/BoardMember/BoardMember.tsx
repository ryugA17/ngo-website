import React from 'react';
import './BoardMember.css';

interface BoardMemberData {
  srNo: number;
  name: string;
  designation: string;
  address: string;
}

const BoardMember: React.FC = () => {
  // Board member data from the images
  const boardMembers: BoardMemberData[] = [
    {
      srNo: 1,
      name: 'Mr. P K Paliwal',
      designation: 'President',
      address: '4/135, SFS, Mansarover, Jaipur-302 020'
    },
    {
      srNo: 2,
      name: 'Mr. B P Sharma',
      designation: 'Vice-President',
      address: '1150, Rani Sati Nagar, Kings Road Ajmer Road, Jaipu'
    },
    {
      srNo: 3,
      name: 'Mr. Kuldeep K Arora',
      designation: 'Secretary',
      address: 'Subhash Colony, Near Bus stand, Jhalawar'
    },
    {
      srNo: 4,
      name: 'Mrs. Aditi Sharma',
      designation: 'Treasurer',
      address: '4/135, SFS, Mansarover, Jaipur-302 020'
    },
    {
      srNo: 5,
      name: 'Mr. Swadesh Dhamija',
      designation: 'Executive Member',
      address: 'J-52 A, Tagore Nagar, HeeraPura, Ajmer Road, Jaipur - 302 024'
    },
    {
      srNo: 6,
      name: 'Dr. Mridula Chaturvedi',
      designation: 'Executive Member',
      address: '3/30 Jawahar Nagar Jaipur'
    },
    {
      srNo: 7,
      name: 'Smt Pratibha Poddar',
      designation: 'Executive Member',
      address: '159, Milap Nagar, Near Jaipuria Hospital, Tonk Road Jaipur'
    },
    {
      srNo: 8,
      name: 'Mr. Tarun Sharma',
      designation: 'Member',
      address: '3/198, Shivam Apartments, Jawahar Nagar, Jaipur'
    },
    {
      srNo: 9,
      name: 'Sh. Mahaveer Prasad',
      designation: 'Member',
      address: ''
    },
    {
      srNo: 10,
      name: 'Mr. Shankar LalAgrawal',
      designation: 'Member',
      address: 'A-106, Pinkoty Apartments, D-24, AkarMarg, Bani Park, Jaipur'
    },
    {
      srNo: 11,
      name: 'Sh. Rajendra Prasad',
      designation: 'Member',
      address: ''
    }
  ];

  return (
    <div className="board-member-section">
      <div className="page-header">
        <h1>BOARD MEMBER</h1>
      </div>
      <div className="breadcrumb">
        <a href="/" className="home-link">
          <i className="fa fa-home"></i> HOME
        </a>
        <span className="separator">o</span>
        <span className="current-page">BOARD MEMBER</span>
      </div>
      
      <div className="container board-member-container">
        <div className="table-responsive">
          <table className="board-member-table">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {boardMembers.map((member) => (
                <tr key={member.srNo}>
                  <td>{member.srNo}</td>
                  <td>{member.name}</td>
                  <td>{member.designation}</td>
                  <td>{member.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoardMember; 