import React from 'react';

function BrewDetail() {
  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <th />
          <th />
          <th />
        </thead>
        <tbody>
          <tr>
            <td rowSpan='3'>Image</td>
            <td>Name</td>
            <td>Rating</td>
          </tr>
          <tr>
            <td colSpan='2'>Type</td>
          </tr>
          <tr>
            <td colSpan='2'>Actual ABV</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BrewDetail;
