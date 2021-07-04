import React from 'react';
import PropTypes from 'prop-types';
import StyleTitle from './styled';

const Title = ({
  level, children,
}) => (
  <StyleTitle
    level={level}
  >
    { children }
  </StyleTitle>
);

Title.propTypes = {
  level: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
