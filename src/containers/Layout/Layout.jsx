import React, { PropTypes } from 'react';
import { VacoAppBar } from 'components';

const Layout = ({ children }) => (
  <div className="app">
    <VacoAppBar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
