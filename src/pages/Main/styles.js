import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 80px auto;
  max-width: 700px;
  padding: 30px;

  h1 {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 20px;
  }

  svg {
    margin-right: 10px;
  }
`;

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

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
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
`;
