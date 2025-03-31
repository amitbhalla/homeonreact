import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/metricCircle.css';

const MetricCircle = ({ value, label, active, onClick }) => {
  return (
    <div 
      className={`metric-circle ${active ? 'active' : ''}`} 
      onClick={onClick}
    >
      <div className="metric-outer-ring">
        <div className="metric-inner">
          <span className="metric-value">
            {value.endsWith('%') ? (
              <>
                {value.slice(0, -1)}
                <span className="metric-symbol">%</span>
              </>
            ) : (
              value
            )}
          </span>
          <span className="metric-label">{label}</span>
        </div>
      </div>
    </div>
  );
};

MetricCircle.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

MetricCircle.defaultProps = {
  active: false,
  onClick: () => {}
};

export default MetricCircle;