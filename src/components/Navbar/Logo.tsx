import { Link } from 'react-router-dom';
import logo from '../../assets/iird-logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="IIRD Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo; 