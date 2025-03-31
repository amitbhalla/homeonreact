import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'General Inquiry'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    
    setErrorMessage('');
    return true;
  };

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
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        subject: 'General Inquiry'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Get in Touch</h2>
      <p className="contact-form-description">
        Have a question or want to discuss how I can help your business? Fill out the form below and I'll get back to you within 24 hours.
      </p>
      
      {submitSuccess && (
        <div className="success-message">
          <div className="success-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="success-text">
            Thank you for your message! I'll get back to you as soon as possible.
          </div>
        </div>
      )}
      
      {errorMessage && (
        <div className="error-message" style={{ 
          color: '#ef4444', 
          marginBottom: '1.5rem', 
          fontWeight: '500' 
        }}>
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
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
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-control" 
            placeholder="Your email address" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="company" className="form-label">Company (Optional)</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="form-control" 
            placeholder="Your company name" 
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <select 
            id="subject" 
            name="subject" 
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Strategy Consultation">Strategy Consultation</option>
            <option value="Service Question">Service Question</option>
            <option value="Career Coaching">Career Coaching</option>
            <option value="Speaking Engagement">Speaking Engagement</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            id="message" 
            name="message" 
            className="form-control" 
            placeholder="What can I help you with?" 
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <div className="form-submit">
          <Button 
            type="submit" 
            variant="primary" 
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;