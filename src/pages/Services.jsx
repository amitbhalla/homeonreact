import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Services | Amit Bhalla</title>
        <meta name="description" content="Expert marketing services to transform your business growth." />
      </Helmet>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh' }}>
        <h1>Our Services</h1>
        <p>This page is under construction. Check back soon for detailed information about our services.</p>
        <Button to="/" variant="primary" style={{ marginTop: '20px' }}>Return Home</Button>
      </div>
    </Layout>
  );
};

export default Services;