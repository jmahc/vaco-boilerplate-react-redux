import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { AppBar, Navigation } from 'vaco-components-library';
import Logo from 'components/Logo/Logo';
import theme from './VacoAppBar.scss';

const VacoAppBar = ({ children, ...other }) => (
  <AppBar
    {...other}
    theme={theme}
  >
    <Logo />
    <Link to="/">Jordan McArdle`s Sample Application</Link>
    {children}
    <Navigation />
  </AppBar>
);

VacoAppBar.propTypes = {
  children: PropTypes.node,
};

export default VacoAppBar;
