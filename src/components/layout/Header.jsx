import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/header.css';
import Button from '../common/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faBolt} /> Amit Bhalla
          </Link>
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
            <Link to="/freebies" onClick={handleLinkClick}>Freebies</Link>
            <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <Button variant="secondary" size="sm">Let's Talk</Button>
            </Link>
          </div>
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;