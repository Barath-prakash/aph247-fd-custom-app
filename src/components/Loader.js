import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ loading, orderId, reloadPage }) => {
    if (loading && !orderId) {
      return (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress color="inherit" size={30} />
          <div style={{ marginTop: 10 }}>
            Page loading for long time ?
          </div>
          <a data-testid="a-tag" hre="#" onClick={() => reloadPage(true)} style={{ cursor: 'pointer' }}>Reload</a>
        </div>
      )
    } 
    return null;
  };

export default Loader;