export const typeNames = {
  MEDICINES: 'Medicines',
  LAB_TESTS: 'Lab Tests',
  DOCTOR_APPOINMENTS: 'Doctor Appointments',
};

export const medicineOrderState = {
  id: '',
  type: '',
  orderAutoId: null,
  billNumber: '',
  devliveryCharges: 0,
  orderType: '',
  deliveryType: '',
  currentStatus: '',
  patientAddressId: '',
  medicineOrderAddress: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    name: '',
    mobileNumber: '',
  },
  patient: {
    id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    pincode: '',
  },
  medicineOrderPayments: {
    paymentDateTime: '',
    paymentMode: '',
    paymentType: '',
  },
  medicineOrderLineItems: {
    medicineName: '',
    medicineSKU: '',
    mrp: '',
    price: '',
    quantity: '',
  },
};

export const medicineOrderKeyList = [
  { labelKey: '', labelValue: `${typeNames?.MEDICINES} Order`, isHeader: true },
  { labelKey: 'orderAutoId', labelValue: 'Order Id' },
  // { labelKey: 'billNumber', labelValue: 'Bill number' },
  { labelKey: 'orderType', labelValue: 'Order type' },
  { labelKey: 'currentStatus', labelValue: 'Order status' },
  { labelKey: 'deliveryType', labelValue: 'Delivery type' },
  // Payment
  { labelKey: '', labelValue: 'Payment', isHeader: true },
  { labelKey: 'medicineOrderPayments_paymentType', labelValue: 'Type' },
  { labelKey: 'medicineOrderPayments_paymentDateTime', labelValue: 'Date' },
  { labelKey: 'medicineOrderPayments_paymentMode', labelValue: 'Mode' },
  // Medicine
  { labelKey: '', labelValue: 'Medicine', isHeader: true },
  {
    labelKey: 'medicineOrderLineItems_medicineName',
    labelValue: 'Medicine name',
  },
  {
    labelKey: 'medicineOrderLineItems_medicineSKU',
    labelValue: 'Medicine SKU',
  },
  { labelKey: 'medicineOrderLineItems_mrp', labelValue: 'MRP' },
  { labelKey: 'medicineOrderLineItems_price', labelValue: 'Price' },
  { labelKey: 'medicineOrderLineItems_quantity', labelValue: 'Quantity' },
  // Patient
  { labelKey: '', labelValue: 'Patient', isHeader: true },
  { labelKey: 'patient_fullName', labelValue: 'Full name' },
  // { labelKey: 'patient_firstName', labelValue: 'First name' },
  // { labelKey: 'patient_lastName', labelValue: 'Last name' },
  { labelKey: 'patient_email', labelValue: 'Email' },
  { labelKey: 'patient_mobileNumber', labelValue: 'Mobile' },
  { labelKey: 'patient_pincode', labelValue: 'Pincode' },
  // Medicine Address
  { labelKey: '', labelValue: 'Address', isHeader: true },
  { labelKey: 'medicineOrderAddress_name', labelValue: 'Name' },
  { labelKey: 'medicineOrderAddress_mobileNumber', labelValue: 'Mobile' },
  {
    labelKey: 'medicineOrderAddress_addressLine1',
    labelValue: 'Address line 1',
  },
  {
    labelKey: 'medicineOrderAddress_addressLine2',
    labelValue: 'Address line 2',
  },
  { labelKey: 'medicineOrderAddress_city', labelValue: 'City' },
  { labelKey: 'medicineOrderAddress_state', labelValue: 'State' },
  { labelKey: 'medicineOrderAddress_zipcode', labelValue: 'Zipcode' },
];
