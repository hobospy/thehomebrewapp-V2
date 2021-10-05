import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export default function ExpandableTableSingle({
  displayExpander,
  isExpanded,
  items,
  onUpdateExpandState,
  title,
  titleBackground,
  titleForeground,
}) {
  const paddingSize = '5px';
  const [expanded, setExpanded] = useState(isExpanded);

  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  function updateExpandedState() {
    if (typeof onUpdateExpandState === 'function') {
      onUpdateExpandState(!expanded);
    } else {
      setExpanded(!expanded);
    }
  }

  return (
    <>
      <div
        className='expandableTableSingleContainer'
        style={{
          background: titleBackground,
          color: titleForeground,
        }}
      >
        <div className='title'>{title}</div>
        {displayExpander ? (
          <div className='expander' onClick={() => updateExpandedState()}>
            {expanded ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
          </div>
        ) : null}
      </div>
      {expanded ? (
        <table style={{ width: '100%' }}>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr className='something.somename' key={index}>
                  <td
                    style={{
                      paddingLeft: paddingSize,
                      paddingRight: paddingSize,
                    }}
                  >
                    {item}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

ExpandableTableSingle.defaultProps = {
  displayExpander: true,
  isExpanded: true,
  titleBackground: '#001A33',
  titleForeground: '#FFF',
};

ExpandableTableSingle.propTypes = {
  displayExpander: PropTypes.bool,
  isExpanded: PropTypes.bool,
  items: PropTypes.array.isRequired,
  onUpdateExpandState: PropTypes.func,
  title: PropTypes.string.isRequired,
  titleBackground: PropTypes.string,
  titleForeground: PropTypes.string,
};
