import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const NavLinks = () => {
  const location = useLocation();
  
  const links = useMemo(() => [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'RURAL DEVELOPMENT', path: '/rural-development' },
    { name: 'NEWS AND EVENTS', path: '/news-events' },
    { name: 'HUMAN RESOURCES', path: '/human-resources' },
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
          <Link 
            to={link.path} 
            className={isActive(link.path) ? 'active' : ''}
            aria-current={isActive(link.path) ? 'page' : undefined}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks; 