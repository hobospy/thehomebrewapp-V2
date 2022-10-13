import PropTypes from 'prop-types';
import React from 'react';

import ReviewRating from '../common/ReviewRating';

const titleBasicStyle = {
  fontSize: '18px',
  width: '100%',
};

const titleStyle = {
  ...titleBasicStyle,
  backgroundColor: '#001a33',
  color: 'white',
};

const defaultStyle = {
  ...titleBasicStyle,
};

const basicDateStyle = {
  borderWidth: '0px',
  fontSize: '12px',
  paddingBottom: '0px',
  paddingTop: '0px',
  paddintRight: '3px',
  textAlign: 'right',
};

const nonSummaryDateStyle = {
  ...basicDateStyle,
  color: 'white',
};

function BrewHeader({ name, recipeType, rating, brewDate, summaryPage }) {
  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr style={summaryPage ? defaultStyle : titleStyle}>
          <td style={{ borderWidth: '0px' }}>{name}</td>
          <td style={{ borderWidth: '0px', width: '300px' }}>{recipeType}</td>
          <td style={{ borderWidth: '0px', width: '85px' }}>
            <ReviewRating ratingValue={rating} summaryPage={summaryPage} />
          </td>
        </tr>
        <tr>
          <td
            style={summaryPage ? basicDateStyle : nonSummaryDateStyle}
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
  summaryPage: PropTypes.bool.isRequired,
};

export default BrewHeader;
