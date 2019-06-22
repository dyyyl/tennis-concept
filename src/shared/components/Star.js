import styled from 'styled-components';

const Star = styled.span`
  display: inline-block;
  color: black;
  margin: auto 1rem;
  animation: spin infinite 7s linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Star;
