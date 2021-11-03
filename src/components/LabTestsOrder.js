import React, { useState, useEffect } from 'react';
import { labTestsOrderKeyList, labTestsOrderState } from '../utils/variables/labTestsOrder';
import OrderItem from './OrderItem';

const LabTestsOrder = ({ patient, orderInfo, orderType }) => {
  const [order, setOrder] = useState(labTestsOrderState);

  function updateLabTestsOrder(orderDetail) {
    const {
      getDiagnosticOrderDetailsByDisplayID: { ordersList: orderData },
    } = orderDetail;
    setOrder(prevState => ({
      ...prevState,
      id: orderData.id,
      preBookingId: orderData.preBookingId,
      orderStatus: orderData.orderStatus,
      paymentType: orderData.paymentType,
      displayId: orderData.displayId,
      city: orderData.city,
      slotDateTimeInUTC: orderData.slotDateTimeInUTC,
      invoiceURL: orderData.invoiceURL,
      labReportURL: orderData.labReportURL,
      collectionCharges: orderData.collectionCharges,
      diagnosticOrderLineItems: orderData.diagnosticOrderLineItems,
      patient,
    }));
  }

  useEffect(() => {
    if (orderInfo) {
      updateLabTestsOrder(orderInfo);
    }
  }, [orderInfo, orderType]);

  return order?.id
    ? labTestsOrderKeyList.map((el, i) => {
        if (el.isList) {
          const value = (
            <div>
              {order[el.labelKey].map((dto, k) => {
                return <div key={k}>Name: {dto.itemName}</div>;
              })}
            </div>
          );
          return <OrderItem key={i} index={i} order={{ [el.labelKey]: value }} item={el} />;
        }
        return <OrderItem key={i} index={i} order={order} item={el} />;
      })
    : null;
};

export default LabTestsOrder;
