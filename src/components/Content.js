import React, { useState, useEffect } from 'react';
import { GET_DIAGNOSTIC_ORDER_DETAILS } from '../queries/diagnostics';
import { GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS } from '../queries/medicine';
import Loader from './common/Loader';
import NoOrder from './common/NoOrder';
import MedicineOrder from './MedicineOrder';
import LabTestsOrder from './LabTestsOrder';
import { typeNames } from '../utils/variables/medicineOrder';

const typeData = {
  Medicines: GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS,
  'Lab Tests': GET_DIAGNOSTIC_ORDER_DETAILS,
};
const initialOrderState = { type: '', orderInfo: {}, orderAutoId: null };

const Content = ({ appClient, apolloClient, loading, error, setLoading, setError }) => {
  const [orderData, setOrderData] = useState(initialOrderState);
  const [patient, setPatient] = useState({});

  async function fetchOrder(type, orderAutoId) {
    try {
      const { data: orderInfo, loading: loaded } = await apolloClient.query({
        query: typeData[type],
        variables: { orderAutoId },
      });
      setLoading(loaded);
      setOrderData({ type, orderInfo: orderInfo, orderAutoId });
    } catch (err) {
      setError(`Fetch medical order error: ${err.message}`);
      setLoading(false);
      setOrderData(initialOrderState);
      setPatient({});
    }
  }

  async function fetchTicketInfo(client) {
    try {
      const { ticket } = await client.data.get('ticket');
      const customData = ticket?.custom_fields;
      const type = ticket?.type;
      if (customData) {
        setPatient(prevState => ({
          ...prevState,
          fullName: customData?.cf_customer_full_name,
          mobileNumber: customData?.cf_customer_phone_number,
          email: customData?.cf_customer_email_address,
          pincode: customData?.cf_customer_pin_code,
        }));
      }
      const orderAutoId = customData?.cf_orderidappointmentid;
      orderAutoId ? fetchOrder(type, orderAutoId) : setLoading(false);
    } catch (err) {
      setError(`Load ticket error: ${err}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (appClient) {
      fetchTicketInfo(appClient);
    }
  }, [appClient]);

  const { type, orderInfo, orderAutoId } = orderData;
  return (
    <>
      <Loader loading={loading} orderId={orderAutoId} reloadPage={() => window?.location?.reload()} />
      <NoOrder loading={loading} error={error} orderId={orderAutoId} />
      {!loading && !error && (
        <>
          {type === typeNames?.MEDICINES && <MedicineOrder patient={patient} orderType={type} orderInfo={orderInfo} />}
          {type === typeNames?.LAB_TESTS && <LabTestsOrder patient={patient} orderType={type} orderInfo={orderInfo} />}
        </>
      )}
    </>
  );
};

export default Content;
