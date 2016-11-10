import React, { PropTypes } from 'react';
import AppBar from 'vaco-components-library/lib/app_bar';
import Logo from 'components/Logo/Logo';
import theme from './VacoAppBar.scss';

const VacoAppBar = ({ children, ...other }) => (
  <AppBar
    {...other}
    theme={theme}
  >
    <Logo />
    <a href="./">V. Alexander - ReactJS + Redux</a>
    {children}
  </AppBar>
);

VacoAppBar.propTypes = {
  children: PropTypes.node,
};

export default VacoAppBar;
