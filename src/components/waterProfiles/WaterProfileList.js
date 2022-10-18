import PropTypes from 'prop-types';
import React from 'react';
import WaterProfileAdditions from './WaterProfileAdditions';

import './WaterProfileList.css';

function WaterProfileList({ waterProfiles }) {
  return (
    <div>
      {waterProfiles.map((waterProfile) => {
        return (
          <table className='table' key={waterProfile.id}>
            <tbody className='tableHighlightRowLink'>
              <tr>
                <td style={{ borderWidth: '0px' }}>{waterProfile.name}</td>
                <td style={{ borderWidth: '0px' }} rowSpan='2'>
                  <WaterProfileAdditions additions={waterProfile.additions} />
                </td>
              </tr>
              <tr>
                <td style={{ borderWidth: '0px' }}>
                  {waterProfile.description}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

WaterProfileList.propTypes = {
  waterProfiles: PropTypes.array.isRequired,
};

export default WaterProfileList;
