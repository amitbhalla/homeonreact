import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Import placeholder image if needed
import placeholderImage from '../../assets/placeholder-blog.jpg';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Use placeholder image if post image is missing
  const imageUrl = post.image || placeholderImage;

  return (
    <div className="blog-card" data-aos="fade-up">
      <div className="blog-card-image-container">
        <img 
          src={imageUrl} 
          alt={post.title} 
          className="blog-card-image"
        />
        <div className="blog-card-category">{post.category}</div>
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <div className="blog-card-date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="blog-card-read-time">
            <FontAwesomeIcon icon={faClock} />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="blog-card-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <Link to={`/blog/${post.slug}`} className="blog-card-link">
          Read More <FontAwesomeIcon icon={faArrowRight} className="blog-card-link-icon" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;