import styled from 'styled-components';
import colors from '../../utils/vars';

const StyleButton = styled.button`
  display: block;
  padding: 15px 35px;
  border-radius: 30px;
  color: ${colors.white};
  background: linear-gradient(180deg, ${colors.lightBlue} 0%, ${colors.blue} 100%);
  font-size: 1.4rem;
  font-weight: 900;
`;

export default StyleButton;
