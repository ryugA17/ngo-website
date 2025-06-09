import React, { useState } from 'react';

const TestDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div style={{ 
      padding: '100px', 
      display: 'flex', 
      justifyContent: 'center', 
      backgroundColor: '#333',
      minHeight: '100vh'
    }}>
      <div style={{ position: 'relative' }}>
        <button 
          onClick={toggleDropdown}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6d2163',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Toggle Dropdown
        </button>
        
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#1e1e1e',
            minWidth: '200px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            borderRadius: '4px',
            marginTop: '10px',
            zIndex: 1000,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0 
            }}>
              <li>
                <a 
                  href="#" 
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: 'white',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Item 1 clicked');
                    setIsOpen(false);
                  }}
                >
                  Item 1
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: 'white',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Item 2 clicked');
                    setIsOpen(false);
                  }}
                >
                  Item 2
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: 'white',
                    textDecoration: 'none'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Item 3 clicked');
                    setIsOpen(false);
                  }}
                >
                  Item 3
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestDropdown; 