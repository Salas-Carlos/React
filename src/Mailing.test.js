import React from 'react';
import { render } from '@testing-library/react';
import Mailing from './Mailing';

test('renders learn react link', () => {
  const { getByText } = render(<Mailing/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
