import styled from 'styled-components';

const Title = styled.h1`
  pointer-events: none;
  user-select: none;
  font-family: serif;
  background-color: palevioletred;
  color: palegoldenrod;
  box-shadow: 7px 10px #7cb4cd;

  margin: 10rem 0 0 10rem;
  padding: 1rem;

  grid-area: bottom-right;
  justify-self: center;
  align-self: center;

  z-index: 125;

  animation: fadeout 1 5s linear forwards;
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Title;
