import PropTypes from 'prop-types';
import React from 'react';

import ReviewRating from '../common/ReviewRating';

function BrewHeader({ name, recipeType, rating, brewDate }) {
  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td style={{ borderWidth: '0px' }}>{name}</td>
          <td style={{ borderWidth: '0px', width: '300px' }}>{recipeType}</td>
          <td style={{ borderWidth: '0px', width: '85px' }}>
            <ReviewRating ratingValue={rating} />
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderWidth: '0px',
              fontSize: '12px',
              paddingBottom: '0px',
              paddingTop: '0px',
              paddintRight: '3px',
              textAlign: 'right',
            }}
            colSpan={3}
          >
            {brewDate}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

BrewHeader.propTypes = {
  name: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  brewDate: PropTypes.string.isRequired,
};

export default BrewHeader;
