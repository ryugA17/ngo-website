import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

interface DropdownOption {
  label: string;
  path: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-label"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        type="button"
      >
        {label}
        <span className={`dropdown-arrow${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && (
        <ul className="dropdown-menu" role="menu">
          {options.map((option, idx) => (
            <li key={option.path} role="none">
              <Link
                to={option.path}
                className="dropdown-item"
                role="menuitem"
                tabIndex={0}
                onClick={() => setOpen(false)}
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown; 