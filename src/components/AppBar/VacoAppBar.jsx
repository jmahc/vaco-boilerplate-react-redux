import React, { PropTypes } from 'react';
import { AppBar, FontIcon } from 'vaco-components-library';
import { Link } from 'react-router';
import theme from './VacoAppBar.scss';

const VacoAppBar = ({ ...other }) => (
  <AppBar {...other} theme={theme} title="Jordan McArdle" raised>
    <Link to="/">
      <FontIcon value="home" />
      Home
    </Link>
    <Link to="/customers">
      <FontIcon value="person" />
      Customers
    </Link>
  </AppBar>
);

VacoAppBar.propTypes = {
  children: PropTypes.node,
};

VacoAppBar.defaultProps = {
  children: '',
};

export default VacoAppBar;
