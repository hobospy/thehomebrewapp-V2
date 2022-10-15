import PropTypes from 'prop-types';
import React from 'react';

function BrewingStep({ description, timer, label }) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th />
          <th style={{ width: '50px' }} />
          <th style={{ width: '25px' }} />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ fontWeight: 'bold' }}>{label}</td>
        </tr>
        <tr>
          <td>{description}</td>
          {timer !== null ? (
            <>
              <td style={{ textAlign: 'right' }}>
                {timer.duration.toString()}
              </td>
              <td>{timer.type.toString()}</td>
            </>
          ) : (
            <>
              <td />
              <td />
            </>
          )}
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
  timer: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default BrewingStep;
