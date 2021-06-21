import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App';

// it should render app component on first 
describe('App', () => {
  afterEach(cleanup);

  it('renders App component', () => {
    render(<App />);
  });
});
