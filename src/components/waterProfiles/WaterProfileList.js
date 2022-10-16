import PropTypes from 'prop-types';
import React from 'react';

import './WaterProfileList.css';

function WaterProfileList({ history, waterProfiles }) {
  const handleRowClick = (id) => {
    history.push('/waterProfile/' + id);
  };

  return (
    <div>
      {waterProfiles.map((waterProfile) => {
        return (
          <table
            className='table'
            key={waterProfile.id}
            onClick={() => handleRowClick(waterProfile.id)}
          >
            <tbody className='tableHighlightRowLink'>
              <tr>
                <td style={{ borderWidth: '0px' }}>{waterProfile.name}</td>
                <td style={{ borderWidth: '0px', width: '300px' }}>
                  {waterProfile.type}
                </td>
              </tr>
              <tr>
                <td style={{ borderWidth: '0px' }} colSpan={2}>
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
  history: PropTypes.object.isRequired,
  waterProfiles: PropTypes.array.isRequired,
};

export default WaterProfileList;
