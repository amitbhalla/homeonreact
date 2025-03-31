import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About | Amit Bhalla</title>
        <meta name="description" content="Learn about Amit Bhalla's journey and expertise in marketing." />
      </Helmet>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh' }}>
        <h1>About Amit Bhalla</h1>
        <p>This page is under construction. Check back soon to learn more about Amit's experience and approach.</p>
        <Button to="/" variant="primary" style={{ marginTop: '20px' }}>Return Home</Button>
      </div>
    </Layout>
  );
};

export default About;