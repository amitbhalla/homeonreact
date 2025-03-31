import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBolt, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import '../../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <h3>
              <FontAwesomeIcon icon={faBolt} /> Amit Bhalla
            </h3>
            <p>
              Marketing Strategist & Growth Consultant with nearly two decades of experience helping B2B companies maximize marketing ROI and accelerate growth.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/bhalla-amit/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links">
              <Link to="/services#strategic-brand-positioning">Strategic Brand Positioning</Link>
              <Link to="/services#performance-marketing">Performance Marketing Optimization</Link>
              <Link to="/services#go-to-market">Go-to-Market Strategy</Link>
              <Link to="/services#employer-branding">Employer Branding</Link>
              <Link to="/services#market-research">Market Research & Intelligence</Link>
              <Link to="/services#career-coaching">Marketing Career Coaching</Link>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="footer-contact-info">
                <strong>Email</strong>
                <a href="mailto:amit9815@gmail.com">amit9815@gmail.com</a>
              </div>
            </div>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faPhone} />
              <div className="footer-contact-info">
                <strong>Phone</strong>
                <a href="tel:+919910776381">+91 9910776381</a>
              </div>
            </div>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div className="footer-contact-info">
                <strong>Location</strong>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Amit Bhalla. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;