import React from 'react';
import PropTypes from 'prop-types';
import StyleButton from './styled';

const Button = ({ children, type }) => (
  <StyleButton type={type}>
    {children}
  </StyleButton>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
