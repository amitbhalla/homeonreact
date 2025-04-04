import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({
  tag,
  title,
  description,
  centered = false,
  className = '',
  maxWidth = 800,
  marginBottom = '3rem',
  color = 'default',
  children
}) => {
  const containerStyle = {
    maxWidth: centered ? `${maxWidth}px` : 'auto',
    margin: centered ? '0 auto' : '0',
    marginBottom,
    textAlign: centered ? 'center' : 'left'
  };

  const textColor = color === 'light' ? { color: 'var(--light)' } : {};
  const descriptionColor = color === 'light' 
    ? { color: 'rgba(255, 255, 255, 0.8)' } 
    : {};

  return (
    <div className={`section-header ${className}`} style={containerStyle}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 
        dangerouslySetInnerHTML={{ __html: title }} 
        style={textColor}
      ></h2>
      {description && <p style={descriptionColor}>{description}</p>}
      {children}
    </div>
  );
};

SectionHeader.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
  maxWidth: PropTypes.number,
  marginBottom: PropTypes.string,
  color: PropTypes.oneOf(['default', 'light', 'dark']),
  children: PropTypes.node
};

export default SectionHeader;