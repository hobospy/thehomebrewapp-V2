import PropTypes from 'prop-types';
import React from 'react';

import BrewHeader from './BrewHeader';
import * as dateFunctions from '../common/DateFunctions';

const BrewDetail = ({ brew }) => {
  return (
    <>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ borderWidth: '0px', padding: '8px' }} colSpan={3}>
              <BrewHeader
                name={brew.name}
                recipeType={brew.recipe.type}
                rating={brew.rating}
                brewDate={dateFunctions.getFullDate(brew.brewDate)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ borderWidth: '0px', padding: '8px' }}>Image</td>
            <td style={{ borderWidth: '0px', padding: '8px' }} colSpan='2'>
              {brew.brewingNotes}
            </td>
          </tr>
          <tr>
            <td style={{ borderWidth: '0px', padding: '8px' }} colSpan='3'>
              {brew.tastingNotes.map((note) => {
                return (
                  <table key={note.id}>
                    <tbody>
                      <tr>
                        <td>{note.id}</td>
                        <td>{note.date}</td>
                        <td>{note.note}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

BrewDetail.propTypes = {
  brew: PropTypes.object.isRequired,
};

export default BrewDetail;
