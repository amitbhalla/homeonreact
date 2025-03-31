import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import '../../styles/components/freeResources.css';

// Import resources data
import resourcesData from '../../data/resources.json';

const FreeResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Load resources data
    setResources(resourcesData);
  }, []);

  return (
    <section className="free-resources" id="resources">
      <div className="container resources-container">
        <SectionHeader
          tag="Free Marketing Resources"
          title="Proven <span class='text-gradient'>Frameworks</span> & Strategy Playbooks"
          description="Access my collection of battle-tested marketing frameworks, templates, and strategy playbooks that I've used to drive growth for industry-leading brands. No email required — just download and apply."
          centered={true}
          className="resources-header"
        />
        
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div 
              className="resource-card" 
              key={resource.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="resource-icon">
                <FontAwesomeIcon icon={['fas', resource.icon]} />
              </div>
              <div className="resource-content">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-desc">{resource.description}</p>
                <ul className="resource-features">
                  {resource.features.map((feature, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={['fas', 'check']} /> {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  href={resource.buttonLink} 
                  variant="primary"
                >
                  {resource.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;