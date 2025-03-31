import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from '../common/SectionHeader';
import Blob from '../common/Blob';
import '../../styles/components/solution.css';

const Solution = () => {
  // Pillar data for the solution section
  const pillars = [
    {
      id: 1,
      number: '01',
      title: 'Strategic Targeting',
      icon: 'bullseye',
      description: 'Identifying your ideal customer profile and building precision-targeted campaigns that reach decision-makers at the right time.'
    },
    {
      id: 2,
      number: '02',
      title: 'Messaging Optimization',
      icon: 'comments',
      description: 'Crafting resonant value propositions and messaging frameworks that cut through noise and connect with your audience\'s pain points.'
    },
    {
      id: 3,
      number: '03',
      title: 'Performance Analytics',
      icon: 'chart-pie',
      description: 'Implementing advanced analytics and attribution models to continuously improve ROI and optimize channel performance.'
    }
  ];

  // Stats data for the solution section
  const stats = [
    { id: 1, number: '35%', label: 'Average Brand Recall Increase' },
    { id: 2, number: '30%', label: 'Pipeline Velocity Growth' },
    { id: 3, number: '50%', label: 'CAC Reduction' },
    { id: 4, number: '20%', label: 'Employee Retention Improvement' }
  ];

  return (
    <section className="solution" id="solution">
      {/* Blob SVGs for solution section */}
      <Blob className="blob-3" type="3" color="var(--accent)" />
      <Blob className="blob-4" type="4" color="var(--light)" />
      
      <div className="container solution-container">
        <div className="solution-grid">
          <div className="solution-content" data-aos="fade-right">
            <SectionHeader
              tag="The Solution"
              title="Data-Driven Marketing That <span class='text-gradient'>Delivers Results</span>"
              description="With nearly 20 years of experience at BCG, McKinsey, and leading B2B companies, I bring a unique approach that combines strategic thinking with tactical execution. My methodology is built around three pillars:"
            />

            <div className="solution-stats">
              {stats.map(stat => (
                <div className="stat" key={stat.id}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="solution-image" data-aos="fade-left">
            <div className="solution-blob blob-1"></div>
            <div className="solution-blob blob-2"></div>
            <div className="pillars-container">
              {pillars.map((pillar, index) => (
                <div 
                  className="pillar-card" 
                  key={pillar.id} 
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="pillar-number">{pillar.number}</div>
                  <div className="pillar-title">
                    <div className="pillar-icon">
                      <FontAwesomeIcon icon={['fas', pillar.icon]} />
                    </div>
                    {pillar.title}
                  </div>
                  <p className="pillar-description">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;