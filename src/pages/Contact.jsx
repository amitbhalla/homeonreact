import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFAQ from '../components/contact/ContactFAQ';

// Import styles
import '../styles/pages/contact.css';

// Import profile image
import amitContactImage from '../assets/amit-contact.png';

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contact | Amit Bhalla | Marketing Strategist</title>
        <meta name="description" content="Get in touch with Amit Bhalla for marketing consulting, strategic advice, and career coaching." />
      </Helmet>
      
      <div className="contact-page">
        {/* Contact Hero Section */}
        <section className="hero contact-hero" id="contact-hero">
          <div className="hero-shapes">
            <div className="hero-shape hero-shape-1"></div>
            <div className="hero-shape hero-shape-2"></div>
            <div className="hero-shape hero-shape-3"></div>
          </div>
          
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-subtitle">Get in Touch</div>
              <h1 className="hero-title">
                Let's Talk About Your <span className="text-gradient">Marketing Goals</span>
              </h1>
              <p className="hero-description">
                Have a question or ready to explore how we can work together? I'm here to help you achieve measurable marketing results.
              </p>
            </div>
            
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <img 
                src={amitContactImage} 
                alt="Amit Bhalla - Contact" 
                className="hero-image" 
              />
            </div>
          </div>
        </section>
        
        {/* Contact Content Section */}
        <section className="contact-content-section">
          <div className="container">
            <div className="contact-grid">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        
        {/* Contact FAQ Section */}
        <ContactFAQ />
      </div>
    </Layout>
  );
};

export default Contact;