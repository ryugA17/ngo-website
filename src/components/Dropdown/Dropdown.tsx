import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

interface DropdownItem {
  label: string;
  path: string;
}

interface DropdownProps {
  isOpen: boolean;
  items: DropdownItem[];
  onClick: () => void;
  isMobile?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, items, onClick, isMobile = false }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClick();
      }
    };
    
    if (!isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClick, isMobile]);

  if (!isOpen && !isMobile) return null;

  return (
    <div 
      className={`dropdown-menu-container ${isOpen ? 'open' : ''}`} 
      ref={dropdownRef}
      style={{ display: isMobile && !isOpen ? 'none' : 'block' }}
    >
      <ul className="dropdown-menu" role="menu">
        {items.map((item) => (
          <li key={item.path} role="none">
            <Link
              to={item.path}
              className="dropdown-item"
              role="menuitem"
              tabIndex={0}
              onClick={onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown; 