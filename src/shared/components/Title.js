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
`;

export default Title;
