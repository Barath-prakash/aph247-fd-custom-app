import React from 'react';

const NoOrder = ({ loading, error, orderId }) => {
  return !loading && !error && !orderId ? (
    <div className="text-center text-warning p-3">Order Id is not exist. Please check and try again.</div>
  ) : null;
};

export default NoOrder;
