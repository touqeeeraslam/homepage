import lazyLoad from '../../utils/lazy-loading';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../index';

const HomePage = lazyLoad(() => import('../../containers/homepage'));

const AppRoutes = () => (
  <Switch>
    {/**
     *****************
     *  ROUTES
     *****************
     */}
    <Route exact path={ROUTES.DEFAULT} component={HomePage} />

    {/**
     *****************
     * HAVING LIST OF MULTIPLE ROUTES
     *****************
     */}
    {/* <Route exact  path={ROUTES.DEFAULT} component={HomePage} /> */}
  </Switch>
);

export default AppRoutes;
