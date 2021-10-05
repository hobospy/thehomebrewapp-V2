import PropTypes from 'prop-types';
import React from 'react';

import './BrewList.css';

function BrewList({ history, onDeleteClick, brews }) {
  const handleRowClick = (id) => {
    history.push('/brew/' + id);
  };

  return (
    <div>
      {brews.map((brew) => {
        return (
          <table
            className='table'
            key={brew.id}
            onClick={() => handleRowClick(brew.id)}
          >
            <tbody className='tableHighlightRowLink'>
              <tr>
                <td style={{ borderWidth: '0px' }}>{brew.name}</td>
                <td style={{ borderWidth: '0px', width: '300px' }}>
                  {brew.type}
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
                    onClick={(event) => onDeleteClick(event, brew)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ borderWidth: '0px' }} colSpan={2}>
                  {brew.description}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

BrewList.propTypes = {
  history: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  brews: PropTypes.array.isRequired,
};

export default BrewList;
