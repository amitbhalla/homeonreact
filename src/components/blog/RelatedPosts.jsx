import React from 'react';
import BlogCard from './BlogCard';

const RelatedPosts = ({ currentPost, allPosts }) => {
  // Get related posts based on category and tags
  const getRelatedPosts = () => {
    // Filter out current post
    const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
    
    // Find posts with the same category
    const sameCategoryPosts = otherPosts.filter(post => 
      post.category === currentPost.category
    );
    
    // Find posts with at least one matching tag
    const relatedByTags = otherPosts.filter(post => {
      const matchingTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      return matchingTags.length > 0;
    });
    
    // Combine and remove duplicates
    const combinedRelated = [...sameCategoryPosts, ...relatedByTags];
    const uniqueRelated = Array.from(new Set(combinedRelated.map(post => post.id)))
      .map(id => combinedRelated.find(post => post.id === id));
    
    // Limit to 3 related posts
    return uniqueRelated.slice(0, 3);
  };

  const relatedPosts = getRelatedPosts();

  // If no related posts, don't render the component
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="related-posts">
      <div className="container related-posts-container">
        <h2 className="related-posts-title">Related Articles</h2>
        <div className="related-posts-grid">
          {relatedPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;