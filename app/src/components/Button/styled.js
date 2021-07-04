import styled from 'styled-components';
import colors from '../../utils/vars';

const StyleButton = styled.button`
  display: block;
  padding: 15px 35px;
  border-radius: 30px;
  color: ${colors.white};
  background-color: ${colors.blue};
  font-weight: 700;
  transition: background-color .4s ease;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`;

export default StyleButton;
