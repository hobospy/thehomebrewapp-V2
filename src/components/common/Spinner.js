import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className='CentreLoadingIndicator'>
      <CircularProgress color='inherit' size='4em' />
      <div>Loading ...</div>
    </div>
  );
};

export default Spinner;
