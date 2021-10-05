import PropTypes from 'prop-types';
import React from 'react';

export default function TextDisplay({ label, narrowMargin, value }) {
  const defaultMargin = narrowMargin ? -5 : 2;
  const labelStyle = {
    color: 'darkgray',
    fontSize: 13,
    marginBottom: defaultMargin,
  };
  const valueStyle = {
    lineHeight: 1.3,
    marginBottom: defaultMargin,
    marginTop: defaultMargin,
  };
  return (
    <>
      <div style={labelStyle}>{label}</div>
      <label style={valueStyle}>{value}</label>
    </>
  );
}

TextDisplay.defaultProps = {
  narrowMargin: false,
};

TextDisplay.propTypes = {
  label: PropTypes.string.isRequired,
  narrowMargin: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
