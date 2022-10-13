import PropTypes from 'prop-types';
import React from 'react';

import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const InvertedStyledRating = withStyles({
  iconEmpty: {
    color: '#98A4AD',
  },
  iconFilled: {
    color: '#FFF',
  },
  iconHover: {
    color: '#FFF',
  },
})(Rating);

const StyledRating = withStyles({
  iconFilled: {
    color: '#001A33',
  },
  iconHover: {
    color: '#001A33',
  },
})(Rating);

export default function ReviewRating({ ratingValue, summaryPage }) {
  console.log(summaryPage);
  return (
    <>
      {summaryPage ? (
        <StyledRating
          value={ratingValue}
          precision={0.5}
          size='small'
          name='styled-rating'
          // onChange={(event, newvalue) => this.updateBrewRating(newvalue)}
        />
      ) : (
        <InvertedStyledRating
          value={ratingValue}
          precision={0.5}
          size='small'
          name='styled-rating'
          // onChange={(event, newvalue) => this.updateBrewRating(newvalue)}
        />
      )}
    </>
  );
}

ReviewRating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  summaryPage: PropTypes.bool.isRequired,
};
