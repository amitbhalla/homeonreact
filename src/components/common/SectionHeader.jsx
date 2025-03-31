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
  children
}) => {
  const containerStyle = {
    maxWidth: centered ? `${maxWidth}px` : 'auto',
    margin: centered ? '0 auto' : '0',
    marginBottom,
    textAlign: centered ? 'center' : 'left'
  };

  return (
    <div className={`section-header ${className}`} style={containerStyle}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      {description && <p>{description}</p>}
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
  children: PropTypes.node
};

export default SectionHeader;