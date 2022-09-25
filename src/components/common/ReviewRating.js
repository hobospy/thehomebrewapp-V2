import PropTypes from 'prop-types';
import React from 'react';

import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#001A33',
  },
  iconHover: {
    color: '#001A33',
  },
})(Rating);

export default function ReviewRating({ ratingValue }) {
  return (
    <StyledRating
      value={ratingValue}
      precision={0.5}
      size='small'
      name='styled-rating'
      // onChange={(event, newvalue) => this.updateBrewRating(newvalue)}
    />
  );
}

ReviewRating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
};
