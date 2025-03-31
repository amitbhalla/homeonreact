import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../common/SectionHeader';
import Blob from '../common/Blob';
import '../../styles/components/services.css';

// Import services data
import servicesData from '../../data/services.json';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Load services data
    setServices(servicesData);
  }, []);

  return (
    <section className="services" id="services">
      {/* Blob SVGs for services */}
      <Blob className="blob-1 blob-small" type="1" color="var(--secondary)" />
      <Blob className="blob-3 blob-rotate blob-small" type="3" color="var(--primary)" />
      
      <div className="container services-container">
        <SectionHeader
          tag="My Services"
          title="Marketing Solutions That Drive <span class='text-accent'>Measurable Results</span>"
          description="Unlike traditional marketing consultants, I focus on delivering practical strategies that generate immediate ROI while building long-term competitive advantages."
          centered={true}
          className="services-header"
        />
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={service.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                <FontAwesomeIcon icon={['fas', service.icon]} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-points">
                {service.points.map((point, i) => (
                  <div key={i} className="service-point">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              
              <a href={service.linkUrl} className="service-link">
                {service.linkText} <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;