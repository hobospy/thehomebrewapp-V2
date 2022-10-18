import PropTypes from 'prop-types';
import React from 'react';

import TextDisplay from '../common/TextDisplay';

function WaterProfileAdditions({ additions }) {
  const perSplit = 4;
  const splitAdditions = additions.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perSplit);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <table style={{ tableLayout: 'fixed', width: '100%' }}>
      <tbody>
        {splitAdditions.map((additionRow, index) => {
          return (
            <tr
              key={index}
              className={'water-profile-additions-table-border'}
              style={
                splitAdditions.length - (index + 1) > 0
                  ? { borderBottomWidth: '1px' }
                  : { borderBottomWidth: '0px' }
              }
            >
              <td
                style={
                  splitAdditions.length > 1 || additionRow.length > 1
                    ? {
                        borderRightWidth: '1px',
                        display: 'inline-block',
                        padding: '3px 3px 10px 3px',
                        width: '25%',
                      }
                    : {
                        display: 'inline-block',
                        padding: '3px 3px 10px 3px',
                        width: '25%',
                      }
                }
              >
                {additionRow.length > 0 ? (
                  <TextDisplay
                    displayTooltip={true}
                    label={additionRow[0].name}
                    narrowMargin={true}
                    value={
                      additionRow[0].amount.toString() + additionRow[0].unit
                    }
                  />
                ) : (
                  <></>
                )}
              </td>
              <td
                style={
                  splitAdditions.length > 1 || additionRow.length > 2
                    ? {
                        borderRightWidth: '1px',
                        display: 'inline-block',
                        padding: '3px 3px 10px 3px',
                        width: '25%',
                      }
                    : {
                        display: 'inline-block',
                        padding: '3px 3px 10px 3px',
                        width: '25%',
                      }
                }
              >
                {additionRow.length > 1 ? (
                  <TextDisplay
                    displayTooltip={true}
                    label={additionRow[1].name}
                    narrowMargin={true}
                    value={
                      additionRow[1].amount.toString() + additionRow[1].unit
                    }
                  />
                ) : (
                  <></>
                )}
              </td>
              <td
                style={
                  splitAdditions.length > 1 || additionRow.length > 3
                    ? {
                        borderRightWidth: '1px',
                        display: 'inline-block',
                        padding: '3px 3px 10px 3px',
                        width: '25%',
                      }
                    : {
                        display: 'inline-block',
                        padding: '3px 3px 10px 3px',
                        width: '25%',
                      }
                }
              >
                {additionRow.length > 2 ? (
                  <TextDisplay
                    displayTooltip={true}
                    label={additionRow[2].name}
                    narrowMargin={true}
                    value={
                      additionRow[2].amount.toString() + additionRow[2].unit
                    }
                  />
                ) : (
                  <></>
                )}
              </td>
              <td
                style={{
                  display: 'inline-block',
                  padding: '3px 3px 10px 3px',
                  width: '25%',
                }}
              >
                {additionRow.length > 3 ? (
                  <TextDisplay
                    displayTooltip={true}
                    label={additionRow[3].name}
                    narrowMargin={true}
                    value={
                      additionRow[3].amount.toString() + additionRow[3].unit
                    }
                  />
                ) : (
                  <></>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

WaterProfileAdditions.propTypes = {
  additions: PropTypes.array.isRequired,
};

export default WaterProfileAdditions;
