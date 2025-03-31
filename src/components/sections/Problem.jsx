import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../common/SectionHeader';
import Blob from '../common/Blob';
import '../../styles/components/problem.css';

// Import problem data
import problemsData from '../../data/problems.json';

const Problem = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Load problem data
    setProblems(problemsData);
  }, []);

  return (
    <section className="problem" id="problem">
      {/* Blob SVGs */}
      <Blob className="blob-1" type="1" color="var(--primary)" />
      <Blob className="blob-2 blob-rotate" type="2" color="var(--secondary)" />
      
      <div className="container problem-container">
        <SectionHeader
          tag="The Challenges You Face"
          title="I Solve the <span class='text-accent'>Marketing Headaches</span> Keeping You Up at Night"
          description="As a B2B leader, you're facing intense pressure to deliver growth with shrinking resources. I've worked with dozens of companies facing these exact challenges—and transformed their marketing performance."
          className="problem-header"
        />
        
        <div className="problem-cards">
          {problems.map((problem, index) => (
            <div 
              key={problem.id} 
              className="problem-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="problem-icon">
                <FontAwesomeIcon icon={['fas', problem.icon]} />
              </div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
              
              {problem.checks.map((check, i) => (
                <div key={i} className="problem-check">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;