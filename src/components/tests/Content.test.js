import React from 'react';
import { render, act } from '@testing-library/react';
import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Content from '../Content';
import { GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS } from '../../queries/medicine';
import { MockedProvider } from '@apollo/client/testing';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache(),
});

const mocks = [
  {
    request: {
      query: GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS,
      variables: {
        orderAutoId: 4000101,
      },
    },
    result: {
      data: {
        getMedicineOrderOMSDetailsWithAddress: {
          medicineOrderDetails: {
            id: '1d639890-2928-46fd-acc8-5f9ad05d386e',
            orderAutoId: 4000101,
            billNumber: null,
            devliveryCharges: 25,
            orderType: 'CART_ORDER',
            deliveryType: 'HOME_DELIVERY',
            currentStatus: 'PAYMENT_SUCCESS',
            patientAddressId: 'f7540756-be39-4ec3-bd16-e9dac617eee5',
            medicineOrderAddress: {
              addressLine1: 'Marufganj lal phatak',
              addressLine2: 'Malsalami',
              city: 'Patna',
              mobileNumber: '7000154296',
              name: 'Pooja',
              state: 'Bihar',
              zipcode: '800008',
            },
            medicineOrderPayments: [
              {
                amountPaid: 120,
                bankTxnId: 'apollo-202110080616061566-1',
                healthCreditsRedeemed: null,
                id: 'cad5e8ac-1522-4d84-8c1f-f6289e49db33',
                paymentDateTime: '2021-10-08',
                paymentMode: 'CREDIT_CARD',
                paymentRefId: '202110080616061566',
                paymentStatus: 'TXN_SUCCESS',
                paymentType: 'CASHLESS',
                refundAmount: 0,
                responseCode: '',
                responseMessage: '',
              },
            ],
            medicineOrderLineItems: [
              {
                isMedicine: '0',
                isPrescriptionNeeded: 0,
                medicineName: 'Littles Soft Cleansing Baby Wipes, 80 Count',
                medicineSKU: 'LIT0170',
                mou: 1,
                mrp: 190,
                price: 95,
                quantity: 1,
              },
            ],
          },
        },
      },
    },
  },
];

test('renders with empty data', () => {
  const appClient = {
    data: {
      get: (name) =>
        new Promise((resolve) => {
          resolve({
            [name]: {
              custom_fields: {
                cf_customer_full_name: 'Bharath',
                cf_customer_phone_number: '9655107243',
                cf_customer_email_address: 'barathprakash3@gmail.com',
                cf_customer_pin_code: 641006,
                cf_orderidappointmentid: null,
              },
            },
          });
        }),
    },
  };
  render(
    <Content
      appClient={appClient}
      apolloClient={client}
      loading={false}
      error="Error occured"
      setLoading={jest.fn}
      setError={jest.fn}
    />,
  );
});

test('renders with errors', () => {
  const appClient = {
    data: {
      get: (name) =>
        new Promise((resolve) => {
          reject({
            statusCode: 500,
            message: 'Somthing went wrong',
            status_text: 'INTERNEL SERVER ERROR',
          });
        }),
    },
  };
  const component = render(
    <Content
      appClient={appClient}
      apolloClient={client}
      loading={true}
      error=""
      setLoading={jest.fn}
      setError={jest.fn}
    />,
  );
});

test('renders with empty data for first element', () => {
  const appClient = {
    data: {
      get: (name) =>
        new Promise((resolve) => {
          resolve({
            [name]: {
              custom_fields: {
                cf_customer_full_name: 'Bharath',
                cf_customer_phone_number: '9655107243',
                cf_customer_email_address: 'barathprakash3@gmail.com',
                cf_customer_pin_code: 641006,
                cf_orderidappointmentid: 4000101,
              },
            },
          });
        }),
    },
  };
  const component = render(
    <MockedProvider mocks={mocks}>
      <Content
        appClient={appClient}
        apolloClient={client}
        loading={false}
        error=""
        setLoading={jest.fn}
        setError={jest.fn}
      />
    </MockedProvider>,
  );
});
