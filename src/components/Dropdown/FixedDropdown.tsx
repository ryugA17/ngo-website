import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FixedDropdown.css';

interface DropdownItem {
  label: string;
  path: string;
}

interface FixedDropdownProps {
  label: string;
  items: DropdownItem[];
  highlight?: boolean;
}

const FixedDropdown: React.FC<FixedDropdownProps> = ({ label, items, highlight = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed-dropdown" ref={dropdownRef}>
      <button 
        className={`dropdown-button ${highlight ? 'highlight' : ''} ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
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
          className={`dropdown-arrow ${isOpen ? 'active' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            {items.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className="dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FixedDropdown; 