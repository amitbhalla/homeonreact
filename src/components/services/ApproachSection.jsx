import React from 'react';
import SectionHeader from '../common/SectionHeader';

const ApproachSection = () => {
  // My approach steps
  const approaches = [
    {
      number: '01',
      title: 'Comprehensive Analysis',
      description: 'I begin with a thorough assessment of your current marketing performance, identifying gaps, opportunities, and areas for immediate improvement. This data-driven approach creates a solid foundation for strategic decisions.'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Together, we develop a customized strategy that aligns with your business goals, target audience, and competitive landscape. Every recommendation is backed by research and focused on delivering measurable results.'
    },
    {
      number: '03',
      title: 'Tactical Implementation',
      description: 'I provide a detailed execution roadmap with clear priorities, timelines, and responsibilities. Whether your team handles implementation or you need hands-on support, I ensure every element of the strategy is executed effectively.'
    },
    {
      number: '04',
      title: 'Continuous Optimization',
      description: 'Marketing is never "set and forget." I implement robust measurement frameworks to track performance and make data-driven adjustments that maximize ROI and ensure sustained growth.'
    }
  ];

  return (
    <section className="approach-section">
      <div className="container">
        <div className="approach-content">
          <SectionHeader
            title="My Approach to Delivering Excellence"
            description="I follow a proven methodology that combines strategic thinking with practical implementation to ensure you get tangible results, not just recommendations."
            centered={true}
          />
          
          <div className="approach-grid">
            {approaches.map((approach, index) => (
              <div 
                className="approach-item" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="approach-number">{index + 1}</div>
                <div className="approach-text">
                  <h3>{approach.title}</h3>
                  <p>{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;