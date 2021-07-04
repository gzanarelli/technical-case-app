import React from 'react';
import PropTypes from 'prop-types';
import StyleLayout from './styled';

const Layout = ({ children }) => (
  <StyleLayout>
    <header>
      HEADER
    </header>
    <div className="wrapper">
      {children}
    </div>
  </StyleLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
