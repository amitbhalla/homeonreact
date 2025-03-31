import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../common/SectionHeader';
import Blob from '../common/Blob';
import '../../styles/components/testimonials.css';

// Import testimonials data
import testimonialsData from '../../data/testimonials.json';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load testimonials data
    setTestimonials(testimonialsData);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      {/* Blob SVGs for testimonials */}
      <Blob className="blob-1 blob-small" type="1" color="var(--accent-2)" />
      <Blob className="blob-3 blob-small" type="3" color="var(--primary)" />
      
      <div className="container testimonials-container">
        <SectionHeader
          tag="What Clients Say"
          title="Success Stories From <span class='text-gradient'>Industry Leaders</span>"
          description="I've had the privilege of working with forward-thinking executives and marketing leaders across various industries. Here's what they have to say about our collaboration."
          centered={true}
          className="testimonials-header"
        />
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-card" 
              key={testimonial.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="testimonial-quote">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="testimonial-content">
                {testimonial.content}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <FontAwesomeIcon icon={faUserCircle} size="3x" />
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;