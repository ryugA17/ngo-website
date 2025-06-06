import { Link } from 'react-router-dom';
import logo from '../../assets/iird-logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" aria-label="IIRD Home">
        <img 
          src={logo} 
          alt="IIRD Logo" 
          className="logo" 
          loading="eager" 
          width="120" 
          height="50" 
        />
      </Link>
    </div>
  );
};

export default Logo; 