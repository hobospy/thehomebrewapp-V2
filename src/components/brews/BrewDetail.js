import PropTypes from 'prop-types';
import React from 'react';

import BrewHeader from './BrewHeader';

import * as brewActions from '../../redux/actions/brewActions';
import * as dateFunctions from '../common/DateFunctions';
import ImageCarousel from '../common/ImageCarousel';

const BrewDetail = ({ brew }) => {
  return (
    <>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: '#001a33',
                borderWidth: '0px',
                padding: '5px',
              }}
              colSpan={2}
            >
              <BrewHeader
                name={brew.name}
                recipeType={brew.recipe.type}
                rating={brew.rating}
                brewDate={dateFunctions.getFullDate(brew.brewDate)}
                summaryPage={false}
              />
            </td>
          </tr>
          <tr style={{ height: '25px' }}>
            <td
              style={{
                borderWidth: '0px',
                padding: '8px',
              }}
              rowSpan='4'
            >
              <div
                style={{ height: '180px', position: 'center', width: '250px' }}
              >
                <ImageCarousel
                  defaultImageUrl={
                    process.env.API_URL + 'Images?ImageName=' + 'default.png'
                  }
                  imageUrls={brewActions.generateBrewImagePath(brew.images)}
                />
              </div>
            </td>
            <td
              style={{
                fontSize: '12px',
                color: 'lightgrey',
              }}
            >
              Brewing Notes
            </td>
          </tr>
          <tr style={{ height: '118', overflow: 'hidden' }}>
            <td
              style={{
                borderWidth: '0px',
                padding: '8px',
                verticalAlign: 'top',
              }}
            >
              {brew.brewingNotes}
            </td>
          </tr>
          <tr style={{ height: '25px' }}>
            <td
              style={{
                fontSize: '12px',
                color: 'lightgrey',
              }}
            >
              Tasting Notes
            </td>
          </tr>
          <tr style={{ height: '118', overflow: 'hidden' }}>
            <td
              style={{
                borderWidth: '0px',
                paddingLeft: '8px',
                paddingRight: '8px',
                verticalAlign: 'top',
              }}
            >
              {brew.tastingNotes.map((note) => {
                return (
                  <table
                    style={{
                      width: '100%',
                    }}
                    key={note.id}
                  >
                    <tbody>
                      <tr>
                        <td>{note.note}</td>
                        <td
                          style={{
                            borderWidth: '0px',
                            fontSize: '12px',
                            minWidth: '70px',
                            paddingBottom: '0px',
                            paddingTop: '0px',
                            paddintRight: '3px',
                            textAlign: 'right',
                            verticalAlign: 'top',
                          }}
                        >
                          {dateFunctions.getFullDate(note.date)}
                        </td>
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
