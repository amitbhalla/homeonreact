import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ServiceDetailCard from '../components/services/ServiceDetailCard';
import MetricsSection from '../components/services/MetricSection';
import ApproachSection from '../components/services/ApproachSection';
import Button from '../components/common/Button';
import CTA from '../components/sections/CTA';

// Import services data
import servicesData from '../data/services.json';
import '../styles/pages/services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Load services data
    setServices(servicesData);
    
    // Scroll to specific service if hash exists
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <Helmet>
        <title>Marketing Services | Amit Bhalla</title>
        <meta name="description" content="Expert marketing services that deliver measurable results for B2B companies. Transform your marketing from a cost center to a revenue-generating machine." />
      </Helmet>
      
      <div className="services-page">
        {/* Services Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content">
              <h1 className="services-hero-title">Marketing Services That Drive Business Growth</h1>
              <p className="services-hero-description">
                I offer a comprehensive range of marketing services designed to solve your most pressing business challenges. Each service is backed by my experience at top consulting firms and leading B2B companies.
              </p>
              <Button to="#services-list" variant="primary" size="lg">
                Explore My Services
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services List Section */}
        <section className="services-list-section" id="services-list">
          <div className="container">
            <SectionHeader
              title="Comprehensive Marketing Solutions"
              description="Each service is tailored to your specific business needs and designed to deliver measurable results that impact your bottom line."
              centered={true}
              marginBottom="4rem"
            />
            
            {services.map(service => (
              <ServiceDetailCard 
                key={service.id} 
                service={service} 
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              />
            ))}
          </div>
        </section>
        
        {/* Success Metrics Section */}
        <MetricsSection />
        
        {/* My Approach Section */}
        <ApproachSection />
        
        {/* CTA Section */}
        <CTA />
      </div>
    </Layout>
  );
};

export default Services;