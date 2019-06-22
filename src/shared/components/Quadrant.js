import styled from 'styled-components';

const Quadrant = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${props => props.gridArea};

  ${({ area, position }) => {
    if (
      area
      && position.x > area.left
      && position.x < area.right
      && position.y > area.top
      && position.y < area.bottom
    ) {
      return 'background-color: lightsteelblue';
    }
    return null;
  }}
`;

export default Quadrant;
