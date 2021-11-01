import React from 'react';

const NoOrder = ({ loading, error, orderId }) => {
  return !loading && !error && !orderId ? (
    <div style={{ textAlign: 'center', color: 'orange' }}>
      <p>Order Id is not exist.</p>
      Please check and try again.
    </div>
  ) : null;
};

export default NoOrder;
