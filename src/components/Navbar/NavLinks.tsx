import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { Dropdown } from '../index';

const aboutUsOptions = [
  { label: 'PROFILE', path: '/about-us/profile' },
  { label: "SECRETARY'S MESSAGE", path: '/about-us/secretary-message' },
  { label: 'IIRD APPROACH TO DEVELOPMENT', path: '/about-us/approach' },
  { label: 'PARTNERS IN GROWTH', path: '/about-us/partners' },
  { label: 'GEOGRAPHICAL OUTREACH', path: '/about-us/geographical-outreach' },
  { label: 'ONGOING ACTIVITIES', path: '/about-us/ongoing-activities' },
  { label: 'LEGAL DOCUMENT', path: '/about-us/legal-document' },
];

const ruralDevelopmentOptions = [
  { label: 'ECONOMIC DEVELOPMENT AND POVERTY ALLEVIATION', path: '/rural-development/economic-poverty' },
  { label: 'EDUCATION AND CHILD DEVELOPMENT', path: '/rural-development/education-child' },
  { label: 'HEALTH AND SANITATION', path: '/rural-development/health-sanitation' },
  { label: 'NATURAL RESOURCES MANAGEMENT', path: '/rural-development/natural-resources' },
  { label: 'WOMEN EMPOWERMENT', path: '/rural-development/women-empowerment' },
  { label: 'RESEARCH, EVALUATION AND MONITORING AGENCY', path: '/rural-development/research-evaluation' },
];

const humanResourcesOptions = [
  { label: 'CORPORATE GOVERNANCE', path: '/human-resources/corporate-governance' },
  { label: 'MANAGEMENT TEAM', path: '/human-resources/management-team' },
  { label: 'BOARD MEMBER', path: '/human-resources/board-member' },
];

const NavLinks = () => {
  const location = useLocation();
  
  const links = useMemo(() => [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', dropdown: aboutUsOptions },
    { name: 'RURAL DEVELOPMENT', dropdown: ruralDevelopmentOptions },
    { name: 'NEWS AND EVENTS', path: '/news-events' },
    { name: 'HUMAN RESOURCES', dropdown: humanResourcesOptions },
    { name: 'CAREERS', path: '/careers' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT US', path: '/contact-us' }
  ], []);
  
  const isActive = (path: string): boolean => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
  };

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          {link.dropdown ? (
            <Dropdown label={link.name} options={link.dropdown} />
          ) : (
            <Link 
              to={link.path!} 
              className={isActive(link.path!) ? 'active' : ''}
              aria-current={isActive(link.path!) ? 'page' : undefined}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks; 