import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  input {
    border: 1px solid #eee;
    border-radius: 4px;
    flex: 1;
    font-size: 16px;
    padding: 10px 15px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  /* button style */
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;

  /* button text-align */
  align-items: center;
  display: flex;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
