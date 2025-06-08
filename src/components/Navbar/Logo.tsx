import { Link } from 'react-router-dom';
import logo from '../../assets/iird-logo.png';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo-container">
      <img src={logo} alt="IIRD Logo" className="logo-image" />
    </Link>
  );
};

export default Logo; 