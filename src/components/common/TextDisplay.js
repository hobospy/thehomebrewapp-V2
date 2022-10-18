import PropTypes from 'prop-types';
import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: '#001a33 !important',
    fontSize: '12px !important',
    marginBottom: '-5px !important',
  },
})(Tooltip);

export default function TextDisplay({
  displayTooltip,
  label,
  narrowMargin,
  value,
}) {
  const defaultMargin = narrowMargin ? -4 : 2;
  const labelStyle = {
    color: 'darkgray',
    cursor: 'context-menu',
    fontSize: 13,
    marginBottom: defaultMargin,
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
  };
  const valueStyle = {
    lineHeight: 1.3,
    marginBottom: defaultMargin,
    marginTop: defaultMargin,
  };
  return (
    <>
      {displayTooltip !== null && displayTooltip ? (
        <StyledTooltip
          title={label}
          enterDelay={1000}
          leaveDelay={200}
          placement='top-start'
        >
          <div style={labelStyle}>{label}</div>
        </StyledTooltip>
      ) : (
        <div style={labelStyle}>{label}</div>
      )}
      <label style={valueStyle}>{value}</label>
    </>
  );
}

TextDisplay.defaultProps = {
  narrowMargin: false,
};

TextDisplay.propTypes = {
  displayTooltip: PropTypes.bool,
  label: PropTypes.string.isRequired,
  narrowMargin: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
