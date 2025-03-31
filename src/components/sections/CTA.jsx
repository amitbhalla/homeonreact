import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/cta.css';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission 
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your interest! We will contact you shortly to schedule your free strategy call.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        challenge: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="cta" id="contact">
      <div className="cta-shapes">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
      </div>
      <div className="container cta-container">
        <h2 className="cta-title">
          Transform Your Marketing Results <span className="text-accent">Starting Today</span>
        </h2>
        <p className="cta-description">
          I only work with a select number of clients each month to ensure I deliver exceptional results. Schedule your free strategy call now to secure your spot.
        </p>
        <div className="cta-form">
          {submitMessage ? (
            <div 
              className={`form-message ${submitMessage.type}`}
              style={{ 
                padding: '2rem',
                backgroundColor: submitMessage.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                borderRadius: '0.75rem',
                marginBottom: '1.5rem',
                color: submitMessage.type === 'success' ? 'var(--success)' : '#ef4444',
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              {submitMessage.text}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="form-control" 
                  placeholder="Your company" 
                  value={formData.company}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="challenge" className="form-label">Your Biggest Marketing Challenge</label>
                <textarea 
                  id="challenge" 
                  name="challenge" 
                  className="form-control" 
                  placeholder="Tell me about your current marketing challenges..." 
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="cta-buttons">
                <button 
                  type="submit" 
                  className="btn btn-secondary"
                  disabled={isSubmitting}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '8px' }} />
                  {isSubmitting ? 'Submitting...' : 'Schedule My Free Strategy Call'}
                </button>
              </div>
            </form>
          )}
          <div className="cta-guarantee">
            <FontAwesomeIcon icon={faLock} />
            <span>Your information is secure and will never be shared with third parties</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;