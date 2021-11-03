import React from 'react';

const Loader = ({ loading, orderId, reloadPage }) => {
  if (loading && !orderId) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" />
        <div className="mt-1">Page loading for long time ?</div>
        <a
          className="text-primary"
          data-testid="a-tag"
          hre="#"
          onClick={() => reloadPage(true)}
          style={{ cursor: 'pointer' }}
        >
          Reload
        </a>
      </div>
    );
  }
  return null;
};

export default Loader;
