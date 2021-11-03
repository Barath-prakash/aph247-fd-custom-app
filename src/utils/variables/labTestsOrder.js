import { typeNames } from './medicineOrder';

export const labTestsOrderState = {
  id: '',
  preBookingId: '',
  orderStatus: '',
  paymentType: '',
  displayId: 0,
  city: '',
  slotDateTimeInUTC: '',
  invoiceURL: null,
  labReportURL: null,
  collectionCharges: 0,
  diagnosticOrderLineItems: [],
  patient: {
    id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    pincode: '',
  },
};

export const labTestsOrderKeyList = [
  { labelKey: '', labelValue: `${typeNames?.LAB_TESTS} Order`, isHeader: true },
  { labelKey: 'displayId', labelValue: 'Order Id' },
  { labelKey: 'orderStatus', labelValue: 'Order status' },
  { labelKey: 'preBookingId', labelValue: 'PreBookingId' },
  { labelKey: 'collectionCharges', labelValue: 'Sample Collection Charges' },
  { labelKey: 'city', labelValue: 'City' },
  { labelKey: 'diagnosticOrderLineItems', labelValue: 'Item Details', isList: true },
  { labelKey: 'paymentType', labelValue: 'Payment Details' },
  { labelKey: 'invoiceURL', labelValue: 'Invoice URL', isLink: true },
  { labelKey: 'labReportURL', labelValue: 'Test Report URL', isLink: true },
  { labelKey: 'slotDateTimeInUTC', labelValue: 'Date and Time of Order' },
  // Patient
  { labelKey: '', labelValue: 'Patient', isHeader: true },
  { labelKey: 'patient_fullName', labelValue: 'Full name' },
  // { labelKey: 'patient_firstName', labelValue: 'First name' },
  // { labelKey: 'patient_lastName', labelValue: 'Last name' },
  { labelKey: 'patient_email', labelValue: 'Email' },
  { labelKey: 'patient_mobileNumber', labelValue: 'Mobile' },
  { labelKey: 'patient_pincode', labelValue: 'Pincode' },
];
