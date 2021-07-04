import styled from 'styled-components';
import colors from '../../utils/vars';

const StyleBloc = styled.div`
  display: flex;
  margin-bottom: 100px;
  flex-direction: ${(p) => {
    if (p.reverse) {
      return 'row-reverse';
    } return 'row';
  }};

  button {
    margin-top: 30px;
  }

  .content {
    margin-top: 50px;
    padding-left: ${(p) => {
    if (p.reverse) {
      return '0px';
    } return '150px';
  }};

    .catch {
      margin-bottom: 20px;
      color: ${colors.blue};
      font-size: 1.7rem;
      font-weight: 700;
    }

    .text, li {
      position: relative;
      max-width: 70%;
      line-height: 2;
    }

    li {
      padding-left: 50px;
      max-width: 40ch;

      span {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid ${colors.grey30};
        border-radius: 90px;
        width: 40px;
        height: 40px;

        &::before, ::after {
          content: "";
          position: absolute;
          top: 17px;
          left: 13px;
          width: 18px;
          transform: rotate(-45deg);
          height: 3px;
          background-color: ${colors.blue};
        }

        &::after {
          width: 10px;
          top: 20px;
          left: 8px;
          transform: rotate(45deg);
        }
      }
    }

    li + li {
      margin-top: 20px;
    }
  }
  div {
    position: relative;
    width: 100%;
    padding-left: ${(p) => {
    if (p.reverse) {
      return '150px';
    } return '0px';
  }};

    img {
      position: relative;
      width: 80%;
      height: auto;
    }
  }
`;

export default StyleBloc;
