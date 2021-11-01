import React from 'react';
import { render } from '@testing-library/react';
import { initialState } from '../../utils/variables';
import ContentList from '../ContentList';

test('renders return null', () => {
  render(<ContentList loading={true} error="" order={initialState} />);
});

test('renders with order data', () => {
  render(
    <ContentList loading={false} error="" order={{ ...initialState, id: 1 }} />,
  );
});
