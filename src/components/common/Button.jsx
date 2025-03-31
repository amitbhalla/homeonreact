import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/components/button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  href = null,
  to = null,
  onClick = null,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  ...rest
}) => {
  // Determine button classes
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    size !== 'md' && `btn-${size}`,
    fullWidth && 'btn-full',
    icon && 'btn-icon',
    loading && 'loading',
    className
  ].filter(Boolean).join(' ');
  
  // Content to display inside the button
  const buttonContent = (
    <>
      {loading ? 'Loading...' : children}
      {icon && !loading && <FontAwesomeIcon icon={icon} />}
    </>
  );
  
  // If it's a link to an external URL
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {buttonContent}
      </a>
    );
  }
  
  // If it's a router link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...rest}>
        {buttonContent}
      </Link>
    );
  }
  
  // Otherwise it's a regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {buttonContent}
    </button>
  );
};

export default Button;