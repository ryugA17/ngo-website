import React, { useRef, useEffect } from 'react';
import './BoardMember.css';

interface BoardMemberData {
  srNo: number;
  name: string;
  designation: string;
  address: string;
}

const BoardMember: React.FC = () => {
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
    <section className="board-member-section" ref={sectionRef} id="board-member">
      <div className="container">
        <div className="board-header">
          <h2 className="section-title animate-fade-in">Human Resources</h2>
          <div className="section-underline"></div>
          <h3 className="board-subtitle animate-fade-in delay-100">Board Member</h3>
        </div>
        
        <div className="table-responsive animate-fade-in delay-200">
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
    </section>
  );
};

export default BoardMember; 