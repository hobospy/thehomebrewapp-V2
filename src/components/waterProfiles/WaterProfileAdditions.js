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
              className={
                splitAdditions.length - (index + 1) > 0
                  ? 'water-profile-additions-table-bordered'
                  : 'water-profile-additions-table'
              }
            >
              <td
                className={
                  splitAdditions.length > 1 || additionRow.length > 1
                    ? 'water-profile-additions-table-cell-bordered'
                    : 'water-profile-additions-table-cell'
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
                className={
                  splitAdditions.length > 1 || additionRow.length > 2
                    ? 'water-profile-additions-table-cell-bordered'
                    : 'water-profile-additions-table-cell'
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
                className={
                  splitAdditions.length > 1 || additionRow.length > 3
                    ? 'water-profile-additions-table-cell-bordered'
                    : 'water-profile-additions-table-cell'
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
              <td className='water-profile-additions-table-cell'>
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
