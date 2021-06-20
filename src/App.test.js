import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App';
// it should render app component
describe('App', () => {
  afterEach(cleanup);

  test('renders App component', () => {
    render(<App />);
  });
});
