import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLightbulb, faCheck } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

// Import resources data
import resourcesData from '../data/resources.json';
import '../styles/pages/freebies.css';

const FreebieDetail = () => {
  const [freebie, setFreebie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    // Find the freebie by slug
    const freebieData = resourcesData.find(resource => resource.slug === slug);
    
    if (freebieData) {
      setFreebie(freebieData);
    }
    
    setLoading(false);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!freebie) {
    return (
      <Layout>
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh', textAlign: 'center' }}>
          <h1>Resource Not Found</h1>
          <p>The resource you're looking for doesn't exist or has been moved.</p>
          <Button to="/freebies" variant="primary" style={{ marginTop: '20px' }}>
            View All Resources
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{freebie.title} | Free Resource | Amit Bhalla</title>
        <meta name="description" content={freebie.description} />
      </Helmet>
      
      <div className="freebie-detail-page">
        {/* Freebie Hero Section */}
        <section className="freebie-detail-hero">
          <div className="container">
            <Link to="/freebies" className="freebie-back-link">
              <FontAwesomeIcon icon={faArrowLeft} className="freebie-back-icon" /> 
              Back to all resources
            </Link>
          </div>
        </section>
        
        {/* Freebie Detail Content */}
        <div className="container">
          <div className="freebie-detail-content">
            <div className="freebie-detail-header">
              <div className="freebie-detail-icon">
                <FontAwesomeIcon icon={['fas', freebie.icon]} />
              </div>
              <h1 className="freebie-detail-title">{freebie.title}</h1>
              <p className="freebie-detail-subtitle">Free Resource</p>
            </div>
            
            <div className="freebie-detail-body">
              <p className="freebie-detail-description">
                {freebie.fullDescription}
              </p>
              
              <div className="freebie-detail-section">
                <h2 className="freebie-detail-section-title">What You'll Learn</h2>
                <div className="freebie-value-props">
                  {freebie.valueProps.map((prop, index) => (
                    <div className="value-prop-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="value-prop-title">
                        <FontAwesomeIcon icon={faLightbulb} className="value-prop-icon" />
                        {prop.title}
                      </div>
                      <p className="value-prop-description">{prop.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="freebie-included-features">
                <h3 className="included-features-title">What's Included</h3>
                <div className="included-features-list">
                  {freebie.includedFeatures.map((feature, index) => (
                    <div className="included-feature" key={index}>
                      <FontAwesomeIcon icon={faCheck} className="included-feature-icon" />
                      <div>{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="freebie-cta-section">
                <h3 className="freebie-cta-title">Ready to Level Up Your Marketing?</h3>
                <p className="freebie-cta-description">
                  Download this free resource now and start implementing proven strategies to improve your marketing performance.
                </p>
                <Button variant="secondary" size="lg">
                  Download {freebie.title} Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FreebieDetail;