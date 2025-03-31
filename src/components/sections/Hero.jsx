import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/hero.css';

// Import placeholder image if needed
import placeholderImage from '../../assets/react.svg';

const Hero = () => {
  // Scroll to contact section on button click
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">Marketing Strategist & Growth Catalyst</div>
          <h1 className="hero-title">
            Your Marketing Isn't Working.<br />I'll <span className="text-gradient">Fix That</span>.
          </h1>
          <p className="hero-description">
            You've tried everything—paid ads, content marketing, social media—but your CAC keeps rising while conversion rates plateau. I help B2B companies transform their marketing from a cost center to a revenue-generating machine.
          </p>
          <div className="hero-cta">
            <a href="#contact" onClick={scrollToContact}>
              <Button variant="secondary" size="lg">
                Schedule Your Free Strategy Call
              </Button>
            </a>
            <a href="#problem">
              <Button variant="outline" size="lg">
                See How I Can Help You
              </Button>
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-bg"></div>
          <img 
            src={placeholderImage} 
            alt="Amit Bhalla - Marketing Architect" 
            className="hero-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;