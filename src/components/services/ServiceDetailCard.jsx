import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';

const ServiceDetailCard = ({ service, id }) => {
  // Benefits data - extended from points in the service data
  const benefits = [
    ...service.points,
    'Customized strategy tailored to your business',
    'Results-focused implementation plan',
    'Data-driven approach',
    'Expert guidance throughout the process'
  ];

  return (
    <div className="service-detailed-card">
      <span className="service-anchor" id={id || `service-${service.id}`}></span>
      <div className="service-card-grid">
        <div className="service-card-icon-area">
          <div className="service-card-icon">
            <FontAwesomeIcon icon={['fas', service.icon]} />
          </div>
          <div className="service-card-title-area">
            {service.title}
          </div>
        </div>
        
        <div className="service-card-content">
          <p className="service-card-description">
            {service.description}
            {/* Extended description */}
            {` My approach to ${service.title.toLowerCase()} combines deep industry expertise with practical 
            implementation strategies. I focus on delivering tangible results that directly impact your bottom line,
            not theoretical frameworks that look good on paper but fail in execution.`}
          </p>
          
          <div className="service-benefits">
            <h3 className="service-benefits-title">Key Benefits</h3>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <div className="benefit-icon">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="benefit-text">{benefit}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-cta">
            <div className="service-cta-text">
              Ready to transform your {service.title.toLowerCase().includes('brand') ? 'brand' : 'marketing'} performance?
            </div>
            <Button 
              to="/contact" 
              variant="primary"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;