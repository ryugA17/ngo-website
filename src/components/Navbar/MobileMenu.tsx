import React from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen = false }) => {
  return (
    <div className="mobile-menu" aria-expanded={isOpen}>
      <NavLinks />
    </div>
  );
};

export default MobileMenu; 