import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import AppRoutes from './appRoutes/index';

export const ROUTES = {
  DEFAULT: '/',
  HOMEPAGE: '/homepage',
};

const Routes = () => {
  const history = useHistory();
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default withRouter(Routes);
