import React from 'react';

// Row component
export const Row = ({ children, className = '', style = {} }) => {
  return (
    <div className={`row ${className}`} style={style}>
      {children}
    </div>
  );
};

// Col component
export const Col = ({ children, lg, md, sm, className = '', style = {} }) => {
  const getColClass = () => {
    let classes = '';
    if (lg) classes += ` col-lg-${lg}`;
    if (md) classes += ` col-md-${md}`;
    if (sm) classes += ` col-sm-${sm}`;
    return classes;
  };

  return (
    <div className={`col${getColClass()} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default { Row, Col };