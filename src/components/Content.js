import React, { useState, useEffect } from 'react';
import { GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS } from "../queries/medicine.js"
import { initialState } from '../utils/variables';
import ContentList from './ContentList.js';
import Loader from './Loader';
import NoOrder from './NoOrder.js';

const Content = ({ 
    appClient,
    apolloClient,
    loading,
    error,
    setLoading,
    setError
 }) => {
  const [order, setOrder] = useState(initialState);

  useEffect(() => {
    if (appClient) {
        fetchTicketInfo(appClient);
    }
  }, [appClient]);

  function init(medicalOrderData) {
    const {
      getMedicineOrderOMSDetailsWithAddress: { medicineOrderDetails: orderData }
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
      }
    }));
  };

  async function fetchMedicineOrder(orderAutoId) {
    try {
      const {
        data: medicineOrderData,
        loading: loaded,
      } = await apolloClient.query({
        query: GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS,
        variables: { orderAutoId }
      });
      setLoading(loaded);
      init(medicineOrderData);
    } catch (err) {
      setError('Fetch medical order error: ' + err.message);
      setLoading(false);
    }
  }

  async function fetchTicketInfo(client) {
    try {
      const { ticket = null } = await client?.data.get("ticket");
      const customData = ticket?.custom_fields;
      if (customData) {
        setOrder(prevState => ({
          ...prevState,
          patient: {
            ...prevState.patient,
            fullName: customData?.cf_customer_full_name,
            mobileNumber: customData?.cf_customer_phone_number,
            email: customData?.cf_customer_email_address,
            pincode: customData?.cf_customer_pin_code,
          }
        }))
      }
      const orderAutoId = ticket?.custom_fields?.cf_orderidappointmentid;
      console.log({ orderAutoId });
      orderAutoId ? fetchMedicineOrder(orderAutoId) : setLoading(false);
    } catch (err) {
      setError('Load ticket error: ' + err);
      setLoading(false);
    }
  }
  
  return (
    <>
      <Loader loading={loading} orderId={order?.id} reloadPage={() => window?.location?.reload()} />
      <ContentList loading={loading} error={error} order={order} />
      <NoOrder loading={loading} error={error} orderId={order?.id} />
    </>
  )
}

export default Content;
