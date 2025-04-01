import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import BlogCard from '../components/blog/BlogCard';
import BlogSidebar from '../components/blog/BlogSidebar';
import { Row, Col } from '../components/common/Grid';

// Import blog data
import blogData from '../data/blog.json';
import '../styles/pages/blog.css';

// Import profile image
import amitBlogImage from '../assets/amit-blog.png';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Load blog posts
    setPosts(blogData);
    setFilteredPosts(blogData);
    
    // Extract unique categories
    const uniqueCategories = [...new Set(blogData.map(post => post.category))];
    setCategories(uniqueCategories);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Handle category filter click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.category === category);
      setFilteredPosts(filtered);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Marketing Blog | Amit Bhalla</title>
        <meta name="description" content="Insights, strategies, and expert advice on B2B marketing, employer branding, and leadership from marketing strategist Amit Bhalla." />
      </Helmet>
      
      <div className="blog-page">
        {/* Blog Hero Section */}
        <section className="hero blog-hero" id="blog-hero">
          <div className="hero-shapes">
            <div className="hero-shape hero-shape-1"></div>
            <div className="hero-shape hero-shape-2"></div>
            <div className="hero-shape hero-shape-3"></div>
          </div>
          
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-subtitle">Marketing Blog</div>
              <h1 className="hero-title">
                Marketing <span className="text-gradient">Insights & Strategies</span>
              </h1>
              <p className="hero-description">
                Expert perspectives on B2B marketing, brand building, and leadership to help you drive measurable business growth.
              </p>
            </div>
            
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <img 
                src={amitBlogImage} 
                alt="Amit Bhalla - Marketing Blog" 
                className="hero-image" 
              />
            </div>
          </div>
        </section>
        
        {/* Blog Content Section */}
        <section className="blog-content-section">
          <div className="container">
            <div className="category-filter">
              <button 
                className={`category-filter-item ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('all')}
              >
                All
              </button>
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-filter-item ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <Row>
              <Col lg={8}>
                <div className="blog-grid">
                  {filteredPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
                
                {filteredPosts.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <h3>No posts found in this category.</h3>
                    <p>Try selecting a different category or check back later for new content.</p>
                  </div>
                )}
              </Col>
              
              <Col lg={4}>
                <BlogSidebar 
                  posts={posts}
                  categories={categories}
                  onCategoryClick={handleCategoryClick}
                  activeCategory={activeCategory}
                />
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;