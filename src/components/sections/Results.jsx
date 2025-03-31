import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../common/SectionHeader';
import MetricCircle from '../common/MetricCircle';
import Button from '../common/Button';
import '../../styles/components/results.css';

// Import case studies data
import caseStudiesData from '../../data/caseStudies.json';

const Results = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    // Load case studies data
    setCaseStudies(caseStudiesData);
  }, []);

  // Metrics data
  const metrics = [
    { id: 1, value: "35%", label: "Brand Recall" },
    { id: 2, value: "30%", label: "Pipeline Growth" },
    { id: 3, value: "50%", label: "CAC Reduction" },
    { id: 4, value: "20%", label: "Talent Retention" }
  ];

  return (
    <section className="results" id="results">
      {/* SVG Blobs for visual interest */}
      <div className="blob blob-results-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(247, 37, 133, 0.05)" d="M38.5,-65.1C45.5,-59.5,44.2,-39.9,48.7,-25.7C53.2,-11.6,63.5,-2.8,66.4,7.9C69.3,18.7,64.8,31.3,55.3,38.7C45.9,46.1,31.4,48.3,19.1,50.1C6.8,52,-3.2,53.6,-14.8,52.5C-26.4,51.5,-39.7,47.8,-48.9,39.7C-58.1,31.5,-63.3,18.9,-66.2,5.1C-69.1,-8.6,-69.7,-23.5,-62.3,-32.5C-54.9,-41.5,-39.4,-44.6,-27.1,-48.1C-14.8,-51.6,-5.6,-55.4,7.5,-63.6C20.6,-71.8,31.5,-70.7,38.5,-65.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="blob blob-results-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(76, 201, 240, 0.05)" d="M58.3,-72.3C73.2,-62.3,81.7,-41.1,81.5,-21.4C81.4,-1.6,72.6,16.7,61.5,30.9C50.3,45.1,36.8,55.1,21.2,62.1C5.6,69.2,-12,73.3,-27.4,69C-42.9,64.7,-56.1,52.1,-65,36.5C-73.9,20.9,-78.5,2.3,-75.1,-14.7C-71.8,-31.7,-60.6,-47.1,-46.5,-57.3C-32.4,-67.6,-15.4,-72.7,3.5,-77.1C22.4,-81.5,43.4,-82.2,58.3,-72.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container results-container">
        <SectionHeader
          tag="Client Success Stories"
          title="Real <span class='text-gradient'>Results</span> for Real Businesses"
          description="My strategies don't just sound good—they deliver measurable outcomes that impact your bottom line. Here's what my clients have achieved."
          centered={true}
          className="results-header"
          data-aos="fade-up"
        />
        
        <div className="results-showcase">
          {/* Metrics Overview */}
          <div className="results-metrics" data-aos="fade-up">
            {metrics.map(metric => (
              <MetricCircle
                key={metric.id}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
          
          {/* Case Studies Grid */}
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div 
                className="case-study-card" 
                key={study.id}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <div className="case-study-problem">
                    <p>{study.problem}</p>
                  </div>
                  <div className="case-study-impact">
                    <ul>
                      {study.impacts.map((impact, i) => (
                        <li key={i}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    href={study.linkUrl} 
                    variant="outline-primary"
                    icon={faArrowRight}
                  >
                    {study.linkText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;