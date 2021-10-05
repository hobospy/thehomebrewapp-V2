import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ExpandableTableSingle from './ExpandableTableSingle';

export default function ExpandableTableDouble({
  isExpanded,
  items1,
  items2,
  title1,
  title2,
  titleBackground,
  titleForeground,
}) {
  const [expanded, setExpanded] = useState(isExpanded);

  function onUpdateExpandState(value) {
    // alert('updating');
    if (typeof value === 'boolean') {
      setExpanded(value);
    }
  }

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <th style={{ width: '50%' }} />
        <th style={{ width: '50%' }} />
      </thead>
      <tbody>
        <tr>
          <td style={{ paddingLeft: 0, verticalAlign: 'top' }}>
            <ExpandableTableSingle
              displayExpander={false}
              isExpanded={expanded}
              items={items1}
              title={title1}
              titleBackground={titleBackground}
              titleForeground={titleForeground}
            />
          </td>
          <td style={{ paddingRight: 0, verticalAlign: 'top' }}>
            <ExpandableTableSingle
              isExpanded={expanded}
              items={items2}
              onUpdateExpandState={onUpdateExpandState}
              title={title2}
              titleBackground={titleBackground}
              titleForeground={titleForeground}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

ExpandableTableDouble.defaultProps = {
  isExpanded: true,
  titleBackground: '#001A33',
  titleForeground: '#FFF',
};

ExpandableTableDouble.propTypes = {
  isExpanded: PropTypes.bool,
  items1: PropTypes.array.isRequired,
  items2: PropTypes.array.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  titleBackground: PropTypes.string,
  titleForeground: PropTypes.string,
};
