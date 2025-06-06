import { useEffect } from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen = false }) => {
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <div className="mobile-menu" aria-expanded={isOpen}>
      <NavLinks />
    </div>
  );
};

export default MobileMenu; 