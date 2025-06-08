import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

interface DropdownItem {
  label: string;
  path: string;
}

interface DropdownProps {
  isOpen: boolean;
  items: DropdownItem[];
  onClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, items, onClick }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
      <ul className="dropdown-list">
        {items.map((item, index) => (
          <li key={index} className="dropdown-item">
            <Link 
              to={item.path} 
              className="dropdown-link"
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