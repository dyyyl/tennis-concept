import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const elementalColorRef = {
  fire: '#ce2029',
  water: '#007FFF',
  earth: '#704214',
  air: '#98fb98',
};

const Quadrant = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${props => props.gridArea};
  opacity: 0.4;
  z-index: initial;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ area, position, element }) => {
    if (
      area
      && position.x > area.left
      && position.x < area.right
      && position.y > area.top
      && position.y < area.bottom
    ) {
      return `background-color: ${elementalColorRef[element]}`;
    }
    return null;
  }}
`;

const Symbol = styled.img`
  pointer-events: none;
  user-select: none;
  height: 200px;
  z-index: -1;
`;

const ElementalQuadrant = ({
  element,
  symbol,
  area,
  position,
  gridArea,
  passThroughRef,
}) => (
  <Quadrant
    element={element}
    area={area}
    position={position}
    gridArea={gridArea}
    ref={passThroughRef}
  >
    <Symbol alt={element} src={symbol} />
  </Quadrant>
);

ElementalQuadrant.propTypes = {
  element: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  gridArea: PropTypes.string.isRequired,
  passThroughRef: PropTypes.object.isRequired,
};

export default ElementalQuadrant;
