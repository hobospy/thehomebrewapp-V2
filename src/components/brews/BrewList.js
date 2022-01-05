import PropTypes from 'prop-types';
import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './BrewList.css';

function BrewList({ history, onDeleteClick, brews }) {
  const handleRowClick = (id) => {
    history.push('/brew/' + id);
  };

  return (
    <div>
      {brews.map((brew) => {
        let basicDate = new Date(Date.parse(brew.brewDate));
        const currentLocale = 'en-GB';
        let fullDate =
          basicDate.toLocaleString(currentLocale, { day: '2-digit' }) +
          '-' +
          basicDate.toLocaleString(currentLocale, { month: 'short' }) +
          '-' +
          basicDate.toLocaleString(currentLocale, { year: 'numeric' });

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
                  {brew.recipeType}
                </td>
                <td style={{ borderWidth: '0px', width: '50px' }}>
                  {brew.rating}
                </td>
                <td
                  style={{
                    borderWidth: '0px',
                    width: '75px',
                    verticalAlign: 'middle',
                    textAlign: 'right',
                  }}
                  rowSpan={3}
                >
                  <button
                    className='danger-button'
                    onClick={(event) => onDeleteClick(event, brew)}
                  >
                    <DeleteOutlineIcon className='danger-button-icon' />
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderWidth: '0px',
                    fontSize: '12px',
                    paddingBottom: '0px',
                    paddingTop: '0px',
                    textAlign: 'right',
                  }}
                  colSpan={3}
                >
                  {fullDate}
                </td>
              </tr>
              <tr>
                <td style={{ borderWidth: '0px' }} colSpan={3}>
                  {brew.recipeDescription}
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
