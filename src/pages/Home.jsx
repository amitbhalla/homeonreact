import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';

// Import sections
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Results from '../components/sections/Results';
import Testimonials from '../components/sections/Testimonials';
import FreeResources from '../components/sections/FreeResources';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

const Home = () => {
  useEffect(() => {
    // Reset scroll position when navigating to home page
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Amit Bhalla | Marketing Architect | Growth Catalyst</title>
        <meta name="description" content="Expert marketing strategist helping B2B companies transform marketing from a cost center to a revenue-generating machine." />
        <meta name="keywords" content="marketing strategy, B2B marketing, growth marketing, employer branding, marketing consultant" />
      </Helmet>

      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <FreeResources />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Home;