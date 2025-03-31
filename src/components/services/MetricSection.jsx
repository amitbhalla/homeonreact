import React from 'react';
import SectionHeader from '../common/SectionHeader';

const MetricsSection = () => {
  // Success metrics for all services
  const metrics = [
    { value: '35%', label: 'Average Brand Recall Increase' },
    { value: '50%', label: 'CAC Reduction' },
    { value: '30%', label: 'Pipeline Velocity Growth' },
    { value: '20%', label: 'Employee Retention Improvement' },
    { value: '40%', label: 'Conversion Rate Improvement' },
    { value: '65%', label: 'Marketing Qualified Leads Increase' }
  ];

  return (
    <section className="success-metrics">
      <div className="container">
        <SectionHeader
          title="Proven Results Across Industries"
          description="My clients consistently see significant improvements in key marketing metrics. Here's what you can expect when working with me."
          centered={true}
          color="light"
        />
        
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div 
              className="metric-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;