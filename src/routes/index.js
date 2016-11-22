import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  Layout,
  Customers,
  Home,
} from '../containers';

const indexRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/customers" component={Customers} />
  </Route>
);

export default function getRoutes(page) {
  const pageName = page.toLowerCase();
  switch (pageName) {
    case 'index':
      return indexRoutes;
    default:
      return indexRoutes;
  }
}
