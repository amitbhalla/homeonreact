import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

const Freebies = () => {
  return (
    <Layout>
      <Helmet>
        <title>Free Resources | Amit Bhalla</title>
        <meta name="description" content="Access free marketing resources, templates, and guides." />
      </Helmet>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh' }}>
        <h1>Free Resources</h1>
        <p>This page is under construction. Check back soon for free marketing resources.</p>
        <Button to="/" variant="primary" style={{ marginTop: '20px' }}>Return Home</Button>
      </div>
    </Layout>
  );
};

export default Freebies;