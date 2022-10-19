import PropTypes from 'prop-types';
import React from 'react';

import TextDisplay from '../common/TextDisplay';
import WaterProfileAdditions from './WaterProfileAdditions';

const WaterProfileDetail = ({ waterProfile }) => {
  return (
    <>
      <div className='waterProfileDetailContainer'>
        <div className='header title'>{waterProfile.name}</div>
        <div className='description'>
          <TextDisplay label='Description' value={waterProfile.description} />
        </div>
        <div className='header additionsTitle'>Additions</div>
        <div className='additions'>
          <WaterProfileAdditions additions={waterProfile.additions} />
        </div>
      </div>
    </>
  );
};

WaterProfileDetail.propTypes = {
  waterProfile: PropTypes.object.isRequired,
};

export default WaterProfileDetail;
