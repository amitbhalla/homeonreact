import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import FreebieCard from '../components/freebies/FreebieCard';
import CTA from '../components/sections/CTA';

// Import resources data
import resourcesData from '../data/resources.json';
import '../styles/pages/freebies.css';

const Freebies = () => {
  const [freebies, setFreebies] = useState([]);

  useEffect(() => {
    // Load resources data
    setFreebies(resourcesData);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Free Marketing Resources | Amit Bhalla</title>
        <meta name="description" content="Access free marketing resources, templates, playbooks, and tools to improve your marketing strategy and execution." />
      </Helmet>
      
      <div className="freebies-page">
        {/* Freebies Hero Section */}
        <section className="freebies-hero">
          <div className="container">
            <div className="freebies-hero-content">
              <h1 className="freebies-hero-title">Free Marketing Resources & Tools</h1>
              <p className="freebies-hero-description">
                Access my collection of battle-tested marketing frameworks, templates, and strategy playbooks that I've used to drive growth for industry-leading brands. No email required — just download and apply.
              </p>
            </div>
          </div>
        </section>
        
        {/* Freebies List Section */}
        <section className="freebies-list-section">
          <div className="container">
            <SectionHeader
              title="Proven Resources for Marketing Success"
              description="These tools and templates are the same ones I use with my clients to drive measurable results. They're designed to be practical, actionable, and immediately applicable to your business."
              centered={true}
            />
            
            <div className="freebies-grid">
              {freebies.map(freebie => (
                <FreebieCard 
                  key={freebie.id} 
                  freebie={freebie} 
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTA />
      </div>
    </Layout>
  );
};

export default Freebies;