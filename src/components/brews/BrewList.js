import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import BrewHeader from './BrewHeader';
import * as dateFunctions from '../common/DateFunctions';

import './BrewList.css';

function BrewList({ onDeleteClick, brews }) {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate('../brews/' + id, { replace: true });
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
                <td style={{ borderWidth: '0px' }} colSpan={3}>
                  <BrewHeader
                    name={brew.name}
                    recipeType={brew.recipeType}
                    rating={brew.rating}
                    brewDate={dateFunctions.getFullDate(brew.brewDate)}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderWidth: '0px' }}
                  colSpan={3}
                  onClick={(event) => onDeleteClick(event, brew)}
                >
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
  onDeleteClick: PropTypes.func.isRequired,
  brews: PropTypes.array.isRequired,
};

export default BrewList;
