import React from 'react';
import { render } from '@testing-library/react';
import { medicineOrderState } from '../../utils/variables/medicineOrder';
import MedicineOrder from '../MedicineOrder';

test('renders return null', () => {
  render(<MedicineOrder loading error="" order={medicineOrderState} />);
});

test('renders with order data', () => {
  render(<MedicineOrder loading={false} error="" order={{ ...medicineOrderState, id: 1 }} />);
});
