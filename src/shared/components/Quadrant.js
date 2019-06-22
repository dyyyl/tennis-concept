import styled from 'styled-components';

const Quadrant = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${props => props.area};
`;

export default Quadrant;
