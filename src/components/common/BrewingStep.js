import PropTypes from 'prop-types';
import React from 'react';

function BrewingStep({ description, duration, durationIndicator, label }) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <th />
        <th style={{ width: '50px' }} />
        <th style={{ width: '25px' }} />
      </thead>
      <tbody>
        <tr>
          <td style={{ fontWeight: 'bold' }}>{label}</td>
        </tr>
        <tr>
          <td>{description}</td>
          <td style={{ textAlign: 'right' }}>{duration}</td>
          <td>{durationIndicator}</td>
        </tr>
      </tbody>
    </table>
  );
}

BrewingStep.defaultProps = {
  duration: '',
};

BrewingStep.propTypes = {
  description: PropTypes.string.isRequired,
  duration: PropTypes.string,
  durationIndicator: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BrewingStep;
