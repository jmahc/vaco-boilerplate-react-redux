import React, { PropTypes } from 'react';
// import 'normalize.css';
import { VacoAppBar } from 'components';

const App = ({ children }) => (
  <div className="app">
    <VacoAppBar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
