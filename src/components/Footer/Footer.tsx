import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h3 className="footer-title">ABOUT US</h3>
          <p className="footer-text">
            The Indian Institute for Rural Development (IIRD) was founded with the aim to provide the most 
            underprivileged individuals with equal conditions, enhancing their capacity to control their own lives, 
            health, education, economic empowerment and political participation and thus allowing them to lead a 
            life of dignity.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Visit our Facebook page" className="social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Visit our Twitter page" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Visit our Instagram page" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="Visit our LinkedIn page" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" aria-label="Visit our YouTube channel" className="social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3 className="footer-title">QUICK LINKS</h3>
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/about">About Us</Link>
              </div>
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/volunteer">Volunteer with IIRD</Link>
              </div>
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/resources">Human Resources</Link>
              </div>
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="footer-links-column">
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/rural-development">Rural Development</Link>
              </div>
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/news">News and Events</Link>
              </div>
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/careers">Careers</Link>
              </div>
              <div className="footer-link-item">
                <span className="footer-link-arrow">›</span>
                <Link to="/balance-sheet">Balance Sheet</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section location">
          <h3 className="footer-title">OUR LOCATION</h3>
          <div className="footer-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256462145!2d75.65047235472982!3d26.885141679234344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1651827267950!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="IIRD Location Map"
              aria-label="Map showing location of Indian Institute for Rural Development in Jaipur"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright">© Copyright {currentYear}. All Rights Reserved by <strong>SIIRD</strong></p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-divider">|</span>
            <Link to="/terms">Terms of Use</Link>
            <span className="footer-divider">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 