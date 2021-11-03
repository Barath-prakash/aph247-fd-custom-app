import React from 'react';
import { render } from '@testing-library/react';
import NoOrder from '../common/NoOrder';

test('renders with return null', () => {
  render(<NoOrder loading error="" orderId="" />);
});

test('renders with return no data found element', () => {
  render(<NoOrder loading={false} error="" orderId="" />);
});
