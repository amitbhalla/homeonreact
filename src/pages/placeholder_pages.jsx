import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

// Services Page
export const Services = () => {
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

// Freebies Page
export const Freebies = () => {
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

// Blog Page
export const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Amit Bhalla</title>
        <meta name="description" content="Marketing insights, strategies, and industry trends." />
      </Helmet>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh' }}>
        <h1>Blog</h1>
        <p>This page is under construction. Check back soon for marketing insights and tips.</p>
        <Button to="/" variant="primary" style={{ marginTop: '20px' }}>Return Home</Button>
      </div>
    </Layout>
  );
};

// About Page
export const About = () => {
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

// Contact Page
export const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact | Amit Bhalla</title>
        <meta name="description" content="Get in touch for marketing consulting and services." />
      </Helmet>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh' }}>
        <h1>Contact Us</h1>
        <p>This page is under construction. Check back soon for contact options.</p>
        <Button to="/" variant="primary" style={{ marginTop: '20px' }}>Return Home</Button>
      </div>
    </Layout>
  );
};