import styled from 'styled-components';
import colors from '../../utils/vars';

const StyleTitle = styled.h1`
  margin-bottom: 40px;
  max-width: 22ch;
  color: ${colors.darkBlue};
  font-size: ${(p) => {
    if (p.level === 'h1') {
      return '6rem';
    }
    return '3.6rem';
  }};
  font-weight: 900;
`;

export default StyleTitle;
