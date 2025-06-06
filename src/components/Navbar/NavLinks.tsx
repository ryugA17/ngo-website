import { Link } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'RURAL DEVELOPMENT', path: '/rural-development' },
    { name: 'NEWS AND EVENTS', path: '/news-events' },
    { name: 'HUMAN RESOURCES', path: '/human-resources' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT US', path: '/contact-us' }
  ];

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks; 