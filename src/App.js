import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import './App.css';

const App = () => (
  <Router className='app'>
    <Routes />
  </Router>
);

export default App;
