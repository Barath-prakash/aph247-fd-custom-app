import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createEvent } from '@testing-library/dom';
import Loader from '../common/Loader';

test('renders learn react link', () => {
  render(<Loader reloadPage={jest.fn()} loading />);
  const element = screen.getByTestId('a-tag');
  const myEvent = createEvent.click(element, { button: 1 });
  fireEvent.click(element, myEvent);
});
