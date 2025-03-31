import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';

const FreebieCard = ({ freebie }) => {
  return (
    <div className="freebie-card" data-aos="fade-up">
      <div className="freebie-card-header">
        <div className="freebie-icon">
          <FontAwesomeIcon icon={['fas', freebie.icon]} />
        </div>
        <div className="freebie-title-area">
          <h3 className="freebie-title">{freebie.title}</h3>
          <div className="freebie-subtitle">Free Resource</div>
        </div>
      </div>
      
      <div className="freebie-card-body">
        <p className="freebie-description">{freebie.description}</p>
        
        <div className="freebie-features">
          <ul className="freebie-features-list">
            {freebie.features.map((feature, index) => (
              <li className="freebie-feature" key={index}>
                <span className="freebie-feature-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="freebie-action">
          <Button 
            to={freebie.buttonLink} 
            variant="primary"
            fullWidth
          >
            {freebie.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreebieCard;