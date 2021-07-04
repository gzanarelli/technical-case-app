import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import StyleBloc from './styled';
import StyleButton from '../Button';

const Bloc = ({
  img, title, content, cta, catchPhrase, reverse, list, level,
}) => (
  <StyleBloc
    reverse={reverse}
  >
    <div className="content">
      <p className="catch">
        {catchPhrase}
      </p>
      <Title
        level={level}
      >
        {title}
      </Title>

      {
        !content ? (
          <ul>
            {
              list.map((item) => (
                <li>
                  <span />
                  {item}
                </li>
              ))
            }
          </ul>
        ) : (
          <p className="text">
            {content}
          </p>
        )
      }
      {
        cta ? (
          <StyleButton type="button">
            {cta}
          </StyleButton>
        ) : null
      }
    </div>
    <div>
      <img src={img} alt="" />
    </div>
  </StyleBloc>
);

Bloc.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Bloc;
