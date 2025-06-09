import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavLinks.css';

interface NavLinksProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

interface DropdownItem {
  label: string;
  path: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false, closeMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const hrRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  // Check if current path is a Human Resources page
  const isHumanResourcesPage = location.pathname.includes('/human-resources');
  // Check if current path is an About Us page
  const isAboutUsPage = location.pathname.includes('/about-us');

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown === 'about' && aboutRef.current && 
          !aboutRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      } else if (activeDropdown === 'hr' && hrRef.current && 
          !hrRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Close dropdown on ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [activeDropdown]);

  const aboutUsDropdownItems: DropdownItem[] = [
    { label: 'Profile', path: '/about-us/profile' },
    { label: 'Secretary\'s Message', path: '/about-us/secretary-message' },
    { label: 'IIRD Approach', path: '/about-us/approach' },
    { label: 'Partners In Growth', path: '/about-us/partners' },
    { label: 'Geographical Outreach', path: '/about-us/geographical-outreach' },
    { label: 'Ongoing Activities', path: '/about-us/ongoing-activities' },
    { label: 'Legal Documents', path: '/about-us/legal-documents' }
  ];

  const humanResourcesDropdownItems: DropdownItem[] = [
    { label: 'Board Members', path: '/human-resources/board-members' },
    { label: 'Management Team', path: '/human-resources/management-team' },
    { label: 'Team Profiles', path: '/human-resources/team-profiles' }
  ];

  return (
    <nav className={`nav-links ${isMobile ? 'mobile' : ''}`}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            HOME
          </Link>
        </li>
        <li 
          ref={aboutRef}
          className={`nav-item dropdown ${activeDropdown === 'about' || isAboutUsPage ? 'active' : ''}`}
        >
          <button 
            className={`nav-link dropdown-toggle ${activeDropdown === 'about' || isAboutUsPage ? 'active' : ''}`} 
            onClick={() => handleDropdownToggle('about')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'about'}
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
          {activeDropdown === 'about' && (
            <div className="dropdown-menu">
              <ul>
                {aboutUsDropdownItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li 
          ref={hrRef}
          className={`nav-item dropdown ${activeDropdown === 'hr' || isHumanResourcesPage ? 'active' : ''}`}
        >
          <button 
            className={`nav-link dropdown-toggle ${activeDropdown === 'hr' || isHumanResourcesPage ? 'active' : ''}`} 
            onClick={() => handleDropdownToggle('hr')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'hr'}
          >
            HUMAN RESOURCES
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
              className={`dropdown-arrow ${activeDropdown === 'hr' ? 'active' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {activeDropdown === 'hr' && (
            <div className="dropdown-menu">
              <ul>
                {humanResourcesDropdownItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/gallery" 
            className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            GALLERY
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/news" 
            className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            NEWS
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
            onClick={handleLinkClick}
          >
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks; 