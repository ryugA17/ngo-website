import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '..';
import './NavLinks.css';

interface NavLinksProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false, closeMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
    setActiveDropdown(null);
  };

  const aboutUsDropdownItems = [
    { label: 'Profile', path: '/about-us/profile' },
    { label: 'Secretary\'s Message', path: '/about-us/secretary-message' },
    { label: 'IIRD Approach', path: '/about-us/approach' },
    { label: 'Partners In Growth', path: '/about-us/partners' },
    { label: 'Geographical Outreach', path: '/about-us/geographical-outreach' },
    { label: 'Ongoing Activities', path: '/about-us/ongoing-activities' },
    { label: 'Legal Documents', path: '/about-us/legal-documents' }
  ];

  return (
    <nav className={`nav-links ${isMobile ? 'mobile' : ''}`}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>HOME</Link>
        </li>
        <li className="nav-item dropdown">
          <button 
            className={`nav-link dropdown-toggle ${activeDropdown === 'about' ? 'active' : ''}`} 
            onClick={() => handleDropdownToggle('about')}
          >
            ABOUT US
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`dropdown-arrow ${activeDropdown === 'about' ? 'active' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <Dropdown 
            isOpen={activeDropdown === 'about'} 
            items={aboutUsDropdownItems} 
            onClick={handleLinkClick} 
          />
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" onClick={handleLinkClick}>PROJECTS</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>GALLERY</Link>
        </li>
        <li className="nav-item">
          <Link to="/news" className="nav-link" onClick={handleLinkClick}>NEWS</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" onClick={handleLinkClick}>CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks; 