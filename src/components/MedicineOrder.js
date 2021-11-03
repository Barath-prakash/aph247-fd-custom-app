import React, { useState, useEffect } from 'react';
import { medicineOrderKeyList, medicineOrderState } from '../utils/variables/medicineOrder';
import OrderItem from './OrderItem';

const MedicineOrder = ({ patient, orderInfo, orderType }) => {
  const [order, setOrder] = useState(medicineOrderState);

  function updateMedicineOrder(medicalOrderData) {
    const {
      getMedicineOrderOMSDetailsWithAddress: { medicineOrderDetails: orderData },
    } = medicalOrderData;
    const { medicineOrderPayments, medicineOrderLineItems } = orderData;
    setOrder(prevState => ({
      ...prevState,
      id: orderData?.id,
      orderAutoId: orderData?.orderAutoId,
      billNumber: orderData?.billNumber,
      devliveryCharges: orderData?.devliveryCharges,
      orderType: orderData?.orderType,
      deliveryType: orderData?.deliveryType,
      currentStatus: orderData?.currentStatus,
      patientAddressId: orderData?.patientAddressId,
      medicineOrderAddress: orderData?.medicineOrderAddress,
      // patient: orderData?.patient,
      medicineOrderPayments: {
        paymentDateTime: medicineOrderPayments?.[0]?.paymentDateTime,
        paymentMode: medicineOrderPayments?.[0]?.paymentMode,
        paymentType: medicineOrderPayments?.[0]?.paymentType,
      },
      medicineOrderLineItems: {
        medicineName: medicineOrderLineItems?.[0].medicineName,
        medicineSKU: medicineOrderLineItems?.[0].medicineSKU,
        mrp: medicineOrderLineItems?.[0].mrp,
        price: medicineOrderLineItems?.[0].price,
        quantity: medicineOrderLineItems?.[0].quantity,
      },
      patient,
    }));
  }

  useEffect(() => {
    if (orderInfo) {
      updateMedicineOrder(orderInfo);
    }
  }, [orderInfo, orderType]);

  return order?.id
    ? medicineOrderKeyList.map((el, i) => <OrderItem key={i} index={i} order={order} item={el} />)
    : null;
};

export default MedicineOrder;
