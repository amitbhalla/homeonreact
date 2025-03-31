import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from '../common/SectionHeader';
import Blob from '../common/Blob';
import '../../styles/components/process.css';

// Import process data
import processesData from '../../data/processes.json';

const Process = () => {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    // Load processes data
    setProcesses(processesData);
  }, []);

  return (
    <section className="process" id="process">
      {/* Blob SVGs for process section */}
      <Blob className="blob-2" type="2" color="var(--light)" />
      <Blob className="blob-4 blob-rotate" type="4" color="var(--accent)" />
      
      <div className="container process-container">
        <SectionHeader
          tag="My Approach"
          title="A Proven Process That <span class='text-gradient'>Gets Results</span>"
          description="My methodology combines the analytical rigor of top consulting firms with practical execution experience. This systematic approach ensures we deliver measurable improvements, not just theoretical strategies."
          centered={true}
          className="process-header"
        />
        
        <div className="process-steps">
          {processes.map((process, index) => (
            <div 
              className="process-step" 
              key={process.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="step-number">{process.step}</div>
              <div className="step-icon">
                <FontAwesomeIcon icon={['fas', process.icon]} />
              </div>
              <h3 className="step-title">{process.title}</h3>
              <p className="step-description">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;