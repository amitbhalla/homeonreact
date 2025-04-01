import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/header.css';
import Button from '../common/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the path is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

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
            <NavLink 
              to="/" 
              onClick={handleLinkClick}
              className={isActiveLink('/') ? 'active' : ''}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={handleLinkClick}
              className={isActiveLink('/services') ? 'active' : ''}
            >
              Services
            </NavLink>
            <NavLink 
              to="/freebies" 
              onClick={handleLinkClick}
              className={isActiveLink('/freebies') ? 'active' : ''}
            >
              Freebies
            </NavLink>
            <NavLink 
              to="/blog" 
              onClick={handleLinkClick}
              className={isActiveLink('/blog') ? 'active' : ''}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={handleLinkClick}
              className={isActiveLink('/about') ? 'active' : ''}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={handleLinkClick}
              className={isActiveLink('/contact') ? 'active' : ''}
            >
              Contact
            </NavLink>
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