import PropTypes from 'prop-types';
import React from 'react';

import './WaterProfileList.css';

function WaterProfileList({ history, onDeleteClick, waterProfiles }) {
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
                <td
                  style={{
                    borderWidth: '0px',
                    width: '125px',
                    verticalAlign: 'middle',
                    textAlign: 'right',
                  }}
                  rowSpan={2}
                >
                  <button
                    className='btn btn-outline-danger'
                    onClick={(event) => onDeleteClick(event, waterProfile)}
                  >
                    Delete
                  </button>
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
  onDeleteClick: PropTypes.func.isRequired,
  waterProfiles: PropTypes.array.isRequired,
};

export default WaterProfileList;
