import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFAQ from '../components/contact/ContactFAQ';

// Import styles
import '../styles/pages/contact.css';

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
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <h1 className="contact-hero-title">Let's Talk About Your Marketing Goals</h1>
              <p className="contact-hero-description">
                Have a question or ready to explore how we can work together? I'm here to help you achieve measurable marketing results.
              </p>
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