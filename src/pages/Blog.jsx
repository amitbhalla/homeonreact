import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

const Blog = () => {
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

export default Blog;