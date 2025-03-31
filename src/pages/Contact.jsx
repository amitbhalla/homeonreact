import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import CTA from '../components/sections/CTA';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact | Amit Bhalla</title>
        <meta name="description" content="Get in touch for marketing consulting and services." />
      </Helmet>
      <div style={{ paddingTop: '80px' }}>
        <CTA />
      </div>
    </Layout>
  );
};

export default Contact;