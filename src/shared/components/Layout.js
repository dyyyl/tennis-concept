import styled from 'styled-components';

const Layout = styled.main`
  height: 100vh;
  display: grid;
  background-color: palegoldenrod;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";
`;

export default Layout;
