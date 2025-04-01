import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faChartLine, 
  faLightbulb, 
  faRocket,
  faChess,
  faUsers,
  faBullseye,
  faComments,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import CTA from '../components/sections/CTA';

// Import placeholder images if needed
import placeholderImage from '../assets/react.svg';
import '../styles/pages/about.css';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Experience data
  const experiences = [
    {
      id: 1,
      company: 'Mynd Integrated Solutions',
      position: 'Vice President - Strategy & Marketing',
      date: 'Aug 2024 - Present',
      description: 'Leading the Marketing and Strategy functions, rebuilding the brand digital identity, helping LOBs build growth roadmaps, and preparing for external investments.'
    },
    {
      id: 2,
      company: 'Boston Consulting Group (BCG)',
      position: 'Marketing Director',
      date: 'Jan 2024 - Aug 2024',
      description: 'Headed Employer Brand for BCG in Asia Pacific, leading a team of 10 marketers across 12 countries to deliver on BCG\'s talent strategy and DEI agenda via digital & social channels.'
    },
    {
      id: 3,
      company: 'Boston Consulting Group (BCG)',
      position: 'Senior Marketing Manager',
      date: 'Nov 2022 - Dec 2023',
      description: 'Created marketing and employer branding strategy for 12 countries, introduced talent attraction and employer branding to BCG\'s Asia Pacific recruiting function.'
    },
    {
      id: 4,
      company: 'Boston Consulting Group (BCG)',
      position: 'Product Marketing Manager',
      date: 'Jan 2019 - Oct 2022',
      description: 'Developed and executed product marketing strategies for BCG B2B solutions, spearheading the launch of two B2B products with targeted go-to-market strategies.'
    },
    {
      id: 5,
      company: 'McKinsey & Company',
      position: 'Senior Analyst',
      date: 'Jul 2012 - Apr 2014',
      description: 'Worked on Product Marketing and management for the Digital Benchmarking Solution (McKBench), executing comprehensive marketing and sales strategies.'
    }
  ];

  // Values data
  const values = [
    {
      id: 1,
      icon: faHandshake,
      title: 'Integrity',
      description: 'I believe in transparency and honesty in all client relationships. I\'ll tell you what you need to hear, not just what you want to hear, and I\'ll never recommend solutions that don\'t align with your business goals.'
    },
    {
      id: 2,
      icon: faChartLine,
      title: 'Results-Driven',
      description: 'Marketing should drive tangible business outcomes. I focus relentlessly on metrics that matter and continuously optimize strategies to maximize return on marketing investment.'
    },
    {
      id: 3,
      icon: faLightbulb,
      title: 'Strategic Thinking',
      description: 'I approach marketing challenges through a strategic lens, connecting short-term tactics to long-term business objectives. My methodology combines analytical rigor with creative problem-solving.'
    },
    {
      id: 4,
      icon: faRocket,
      title: 'Continuous Innovation',
      description: 'The marketing landscape evolves rapidly. I stay at the forefront of industry trends and emerging technologies, bringing fresh perspectives and innovative approaches to every client engagement.'
    }
  ];

  // Expertise areas data
  const expertiseAreas = [
    {
      id: 1,
      icon: faBullseye,
      title: 'Strategic Brand Positioning',
      description: 'Developing differentiated brand positions that create competitive advantage and resonate with target audiences.'
    },
    {
      id: 2,
      icon: faChartPie,
      title: 'Performance Marketing',
      description: 'Building data-driven marketing systems that deliver measurable ROI and sustainable customer acquisition.'
    },
    {
      id: 3,
      icon: faRocket,
      title: 'Go-to-Market Strategy',
      description: 'Creating comprehensive market entry and expansion plans that align product, marketing, and sales efforts.'
    },
    {
      id: 4,
      icon: faUsers,
      title: 'Employer Branding',
      description: 'Developing compelling employer value propositions that attract and retain top talent while reducing recruitment costs.'
    },
    {
      id: 5,
      icon: faChess,
      title: 'Marketing Leadership',
      description: 'Advising marketing executives on organizational design, capability building, and strategic transformation initiatives.'
    },
    {
      id: 6,
      icon: faComments,
      title: 'Career Coaching',
      description: 'Guiding marketing professionals through career transitions, skill development, and leadership advancement.'
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Amit Bhalla | Marketing Strategist</title>
        <meta name="description" content="Learn about Amit Bhalla's journey from McKinsey to marketing strategist, and how his experience helps drive results for B2B companies." />
      </Helmet>
      
      <div className="about-page">
        {/* About Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-grid">
              <div className="about-hero-content">
                <h1 className="about-hero-title">Marketing Strategist with a Passion for Results</h1>
                <p className="about-hero-description">
                  Hi, I'm Amit Bhalla. I help B2B companies transform their marketing from a cost center to a revenue-generating machine. With experience from BCG, McKinsey, and leading B2B companies, I bring a unique blend of strategic thinking and practical execution to every client engagement.
                </p>
              </div>
              
              <div className="about-hero-image-container">
                <div className="about-hero-image-bg"></div>
                <img 
                  src={placeholderImage} 
                  alt="Amit Bhalla" 
                  className="about-hero-image"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* About Story Section */}
        <section className="about-story">
          <div className="container about-story-container">
            <div className="about-story-content">
              <h2 className="about-story-title">My Story</h2>
              
              <div className="story-journey">
                <div className="story-journey-item">
                  <div className="story-journey-year">The Beginning</div>
                  <div className="story-journey-content">
                    <h3 className="story-journey-title">Where It All Started</h3>
                    <p>
                      My marketing journey began with a fascination for the intersection of business strategy and customer psychology. After completing my MBA with dual specializations in Marketing and Finance, I was drawn to the world of strategic consulting.
                    </p>
                  </div>
                </div>
                
                <div className="story-journey-item">
                  <div className="story-journey-year">Early Career</div>
                  <div className="story-journey-content">
                    <h3 className="story-journey-title">Learning from the Best</h3>
                    <p>
                      At McKinsey & Company, I honed my analytical skills and strategic thinking in the data analytics team. This foundation gave me a unique perspective on how data should inform marketing decisions—something that continues to differentiate my approach today.
                    </p>
                  </div>
                </div>
                
                <div className="story-journey-item">
                  <div className="story-journey-year">Pivotal Moments</div>
                  <div className="story-journey-content">
                    <h3 className="story-journey-title">The ROI Revelation</h3>
                    <p>
                      Working with Fortune 500 companies at both McKinsey and BCG, I witnessed firsthand the challenges B2B companies face in demonstrating marketing ROI. This sparked my mission to transform marketing from a cost center to a revenue driver.
                    </p>
                  </div>
                </div>
                
                <div className="story-journey-item">
                  <div className="story-journey-year">Leadership</div>
                  <div className="story-journey-content">
                    <h3 className="story-journey-title">Building High-Performance Teams</h3>
                    <p>
                      As I transitioned into leadership roles—from Marketing Director at BCG to VP at Mynd Integrated Solutions—I've focused on building marketing functions that directly contribute to business growth, spanning brand strategy, performance marketing, and more.
                    </p>
                  </div>
                </div>
                
                <div className="story-journey-item">
                  <div className="story-journey-year">Today</div>
                  <div className="story-journey-content">
                    <h3 className="story-journey-title">Strategic Partner</h3>
                    <p>
                      Now, I work with select B2B companies to solve their most pressing marketing challenges. Whether it's reducing customer acquisition costs, accelerating pipeline velocity, or strengthening brand positioning, I apply a methodical approach that delivers tangible outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Timeline Section */}
        <section className="about-experience">
          <div className="container">
            <SectionHeader
              title="My Professional Journey"
              description="Over the past two decades, I've built expertise across top consulting firms and leading B2B companies, developing a unique perspective on what drives marketing success."
              centered={true}
            />
            
            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                <div 
                  className="timeline-item" 
                  key={experience.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-content">
                    <div className="timeline-company">{experience.company}</div>
                    <div className="timeline-position">{experience.position}</div>
                    <div className="timeline-date">{experience.date}</div>
                    <div className="timeline-description">{experience.description}</div>
                  </div>
                  <div className="timeline-point"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="about-values">
          <div className="container">
            <SectionHeader
              title="My Values & Approach"
              description="These core principles guide how I work with clients and approach every marketing challenge."
              centered={true}
            />
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  className="value-card" 
                  key={value.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="value-icon">
                    <FontAwesomeIcon icon={value.icon} />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="about-expertise">
          <div className="container">
            <div className="expertise-content">
              <h2 className="expertise-title">Areas of Expertise</h2>
              <p className="expertise-description">
                I bring deep expertise across key marketing disciplines, with a particular focus on these core areas where I consistently deliver exceptional results for clients.
              </p>
              
              <div className="expertise-grid">
                {expertiseAreas.map((area, index) => (
                  <div 
                    className="expertise-item" 
                    key={area.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h3 className="expertise-item-title">
                      <FontAwesomeIcon icon={area.icon} className="expertise-item-icon" />
                      {area.title}
                    </h3>
                    <p className="expertise-item-description">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTA />
      </div>
    </Layout>
  );
};

export default About;