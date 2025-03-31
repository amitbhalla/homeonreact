import React from 'react';
import { Link } from 'react-router-dom';

// Import placeholder image if needed
import placeholderImage from '../../assets/placeholder-blog.jpg';

const BlogSidebar = ({ posts, categories, onCategoryClick, activeCategory }) => {
  // Sort popular posts by date (most recent first)
  const popularPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Format date for sidebar posts
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-sidebar">
      {/* Categories Section */}
      <div className="blog-categories">
        <h3 className="blog-categories-title">Categories</h3>
        <ul className="categories-list">
          <li className="category-item">
            <button 
              className={`category-link ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => onCategoryClick('all')}
            >
              <span>All Categories</span>
              <span className="category-count">{posts.length}</span>
            </button>
          </li>
          {categories.map((category) => {
            const count = posts.filter(post => post.category === category).length;
            return (
              <li className="category-item" key={category}>
                <button 
                  className={`category-link ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => onCategoryClick(category)}
                >
                  <span>{category}</span>
                  <span className="category-count">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popular Posts Section */}
      <div className="popular-posts">
        <h3 className="popular-posts-title">Recent Posts</h3>
        {popularPosts.map(post => (
          <div className="popular-post-item" key={post.id}>
            <img 
              src={post.image || placeholderImage} 
              alt={post.title} 
              className="popular-post-image"
            />
            <div className="popular-post-content">
              <h4 className="popular-post-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              <div className="popular-post-meta">{formatDate(post.date)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;