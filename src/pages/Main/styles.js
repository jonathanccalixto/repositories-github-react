import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => (props.error ? '#FF170F' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;

  small {
    color: #333;
    font-size: 14px;
  }
`;
