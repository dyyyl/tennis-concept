import React, { useEffect, useRef, useState } from 'react';

import Title from 'shared/components/Title';
import Shuriken from 'shared/components/Shuriken';
import Star from 'shared/components/Star';
import Layout from 'shared/components/Layout';
import Quadrant from 'shared/components/Quadrant';

import moveShuriken from 'shared/helpers/moveShuriken';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  const topLeftQuadrantRef = useRef(null);
  const topRightQuadrantRef = useRef(null);
  const bottomLeftQuadrantRef = useRef(null);
  const bottomRightQuadrantRef = useRef(null);

  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 4,
  });

  const [topLeftArea, setTopLeftArea] = useState(null);
  const [topRightArea, setTopRightArea] = useState(null);
  const [bottomLeftArea, setBottomLeftArea] = useState(null);
  const [bottomRightArea, setBottomRightArea] = useState(null);

  useEffect(() => {
    setTopLeftArea(topLeftQuadrantRef.current.getBoundingClientRect());
    setTopRightArea(topRightQuadrantRef.current.getBoundingClientRect());
    setBottomLeftArea(bottomLeftQuadrantRef.current.getBoundingClientRect());
    setBottomRightArea(bottomRightQuadrantRef.current.getBoundingClientRect());
    document.addEventListener('click', event => moveShuriken(event, setPosition));
    return document.removeEventListener('click', moveShuriken);
  }, []);

  return (
    <>
      <Layout>
        <Quadrant
          gridArea="top-left"
          ref={topLeftQuadrantRef}
          area={topLeftArea}
          position={position}
        />
        <Quadrant
          gridArea="top-right"
          ref={topRightQuadrantRef}
          area={topRightArea}
          position={position}
        />
        <Quadrant
          gridArea="bottom-left"
          ref={bottomLeftQuadrantRef}
          area={bottomLeftArea}
          position={position}
        />
        <Quadrant
          gridArea="bottom-right"
          ref={bottomRightQuadrantRef}
          area={bottomRightArea}
          position={position}
        />
        <Title>
          s u n s e t<Star>✫</Star>s h u r i k e n
        </Title>
        <Shuriken position={position} />
      </Layout>
      <GlobalStyle />
    </>
  );
};

export default App;
