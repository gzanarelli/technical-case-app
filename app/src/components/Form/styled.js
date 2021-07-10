import styled from 'styled-components';
import colors from '../../utils/vars';

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  form {
    padding: 50px;
    width: 50%;
    background-color: ${colors.white};
    border: 1;
    border-radius: 45px;
    box-shadow: 0px 5px 25px 1px ${colors.grey30};

    label {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      color: ${colors.darkBlue};

      input {
        margin-top: 15px;
        padding: 15px;
        border-width: 3px;
        border-color: ${colors.grey30};
        border-style: solid;
        border-radius: 30px;
        transition: border-color .5s ease;

        &:focus {
          outline: none;
          border-color: ${colors.grey};
        }
      }

      .error {
        margin-top: 5px;
        color: ${colors.red};
      }
    }

    p {
      margin-bottom: 20px;
      color: ${colors.darkBlue};

      span {
        font-weight: 700;
      }

      a {
        color: ${colors.blue};
      }
    }
    button {
      margin: 0 auto;
    }
  }
`;

export default StyleForm;
