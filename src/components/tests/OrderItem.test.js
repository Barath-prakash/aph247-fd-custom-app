import React from 'react';
import { render } from '@testing-library/react';
import OrderItem from '../OrderItem';
import { medicineOrderKeyList, medicineOrderState } from '../../utils/variables/medicineOrder';

test('renders with empty data', () => {
  render(<OrderItem index={0} order={medicineOrderState} item={{ labelKey: '', labelValue: '', isHeader: false }} />);
});

test('renders with empty data for first element', () => {
  render(<OrderItem index={0} order={medicineOrderState} item={{ labelKey: '', labelValue: '', isHeader: true }} />);
});

test('renders with valid header data', () => {
  render(
    <OrderItem
      index={0}
      order={medicineOrderState}
      item={{
        labelKey: medicineOrderKeyList[0]?.labelKey,
        labelValue: medicineOrderKeyList[0]?.labelValue,
        isHeader: medicineOrderKeyList[0]?.isHeader,
      }}
    />
  );
});

test('renders with valid non-header data', () => {
  render(
    <OrderItem
      index={1}
      order={medicineOrderState}
      item={{
        labelKey: medicineOrderKeyList[1]?.labelKey,
        labelValue: medicineOrderKeyList[1]?.labelValue,
        isHeader: medicineOrderKeyList[1]?.isHeader,
      }}
    />
  );
});

test('renders with valid non-header data', () => {
  render(
    <OrderItem
      index={9}
      order={medicineOrderState}
      item={{
        labelKey: medicineOrderKeyList[9]?.labelKey,
        labelValue: medicineOrderKeyList[9]?.labelValue,
        isHeader: medicineOrderKeyList[9]?.isHeader,
      }}
    />
  );
});
