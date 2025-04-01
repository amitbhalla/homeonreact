import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/Layout';
import RelatedPosts from '../components/blog/RelatedPosts';

// Import blog data
import blogData from '../data/blog.json';
import '../styles/pages/blog.css';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // Find the post by slug
    const currentPostIndex = blogData.findIndex(p => p.slug === slug);
    
    if (currentPostIndex !== -1) {
      const currentPost = blogData[currentPostIndex];
      setPost(currentPost);
      
      // Set previous and next posts
      setPrevPost(currentPostIndex < blogData.length - 1 ? blogData[currentPostIndex + 1] : null);
      setNextPost(currentPostIndex > 0 ? blogData[currentPostIndex - 1] : null);
    }
    
    setLoading(false);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return (
      <Layout>
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '50vh', textAlign: 'center' }}>
          <h1>Blog Post Not Found</h1>
          <p>The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>
            View All Posts
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Amit Bhalla</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="blog-post-page">
        {/* Blog Post Hero */}
        <section className="blog-post-hero">
          <div className="container">
            <div className="blog-post-hero-content">
              <Link to="/blog" className="blog-post-back-link">
                <FontAwesomeIcon icon={faArrowLeft} className="blog-post-back-icon" /> 
                Back to all articles
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="blog-post-category"> {post.category}</div>
              <h1 className="blog-post-title"> {post.title}</h1>
              
              <div className="blog-post-meta">
                <div className="blog-post-author">
                  <FontAwesomeIcon icon={faUser} />
                  <span>{post.author}</span>
                </div>
                
                <div className="blog-post-date">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>{formatDate(post.date)}</span>
                </div>
                
                <div className="blog-post-read-time">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Post Content */}
        <section className="blog-post-content-container">
          <div className="container">
            <div className="blog-post-content-wrapper">
              <div 
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="blog-post-tags">
                  {post.tags.map((tag, index) => (
                    <Link to={`/blog?tag=${tag}`} className="blog-post-tag" key={index}>
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              
              {/* Post Navigation */}
              <div className="blog-post-navigation">
                {nextPost && (
                  <Link to={`/blog/${nextPost.slug}`} className="blog-post-nav-link">
                    <div className="blog-post-nav-direction">Previous Post</div>
                    <div className="blog-post-nav-title">{nextPost.title}</div>
                  </Link>
                )}
                
                {!nextPost && <div></div>}
                
                {prevPost && (
                  <Link to={`/blog/${prevPost.slug}`} className="blog-post-nav-link" style={{ textAlign: 'right' }}>
                    <div className="blog-post-nav-direction">Next Post</div>
                    <div className="blog-post-nav-title">{prevPost.title}</div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        <RelatedPosts currentPost={post} allPosts={blogData} />
      </div>
    </Layout>
  );
};

export default BlogPost;