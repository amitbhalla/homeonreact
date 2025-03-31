import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-content">
        <h2 className="contact-info-title">Contact Information</h2>
        <p className="contact-info-description">
          Want to get in touch right away? Here are the best ways to reach me directly.
        </p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-method-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-method-content">
              <h3 className="contact-method-title">Email</h3>
              <p className="contact-method-text">
                <a href="mailto:amit9815@gmail.com">amit9815@gmail.com</a>
              </p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-method-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-method-content">
              <h3 className="contact-method-title">Phone</h3>
              <p className="contact-method-text">
                <a href="tel:+919910776381">+91 9910776381</a>
              </p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-method-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-method-content">
              <h3 className="contact-method-title">Location</h3>
              <p className="contact-method-text">
                Based in India, available for global remote consulting
              </p>
            </div>
          </div>
        </div>
        
        <div className="contact-social">
          <h3 className="contact-social-title">Connect on Social Media</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bhalla-amit/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;