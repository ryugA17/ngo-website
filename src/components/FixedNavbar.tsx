import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FixedDropdown from './Dropdown/FixedDropdown';
import './FixedNavbar.css';

const FixedNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
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

  const humanResourcesDropdownItems = [
    { label: 'Board Members', path: '/human-resources/board-members' },
    { label: 'Management Team', path: '/human-resources/management-team' },
    { label: 'Team Profiles', path: '/human-resources/team-profiles' }
  ];

  return (
    <header className={`fixed-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
              src="/logo.png" 
              alt="Society of Indian Institute for Rural Development" 
              className="logo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/150x50?text=SIIRD';
              }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${mobileMenuOpen ? 'hidden' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <FixedDropdown label="ABOUT US" items={aboutUsDropdownItems} />
            </li>
            <li className="nav-item">
              <FixedDropdown label="HUMAN RESOURCES" items={humanResourcesDropdownItems} highlight={true} />
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">PROJECTS</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">GALLERY</Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">NEWS</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">CONTACT US</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>HOME</Link>
              </li>
              <li className="mobile-nav-item">
                <FixedDropdown label="ABOUT US" items={aboutUsDropdownItems} />
              </li>
              <li className="mobile-nav-item">
                <FixedDropdown label="HUMAN RESOURCES" items={humanResourcesDropdownItems} highlight={true} />
              </li>
              <li className="mobile-nav-item">
                <Link to="/projects" className="mobile-nav-link" onClick={toggleMobileMenu}>PROJECTS</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/gallery" className="mobile-nav-link" onClick={toggleMobileMenu}>GALLERY</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/news" className="mobile-nav-link" onClick={toggleMobileMenu}>NEWS</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/contact-us" className="mobile-nav-link" onClick={toggleMobileMenu}>CONTACT US</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default FixedNavbar; 