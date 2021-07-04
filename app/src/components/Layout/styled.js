import styled from 'styled-components';
import colors from '../../utils/vars';

const StyleLayout = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  header {
    background-color: ${colors.blue};
    height: 100px;
    z-index: 9999;
  }
`;

export default StyleLayout;
