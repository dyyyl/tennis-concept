import React, { useEffect, useRef, useState } from 'react';

import Title from 'shared/components/Title';
import Shuriken from 'shared/components/Shuriken';
import Star from 'shared/components/Star';
import Layout from 'shared/components/Layout';
import Quadrant from 'shared/components/Quadrant';

import moveShuriken from 'shared/helpers/moveShuriken';

import GlobalStyle from 'shared/styles/GlobalStyle';

import Air from 'shared/images/Air.svg';
import Earth from 'shared/images/Earth.svg';
import Water from 'shared/images/Water.svg';
import Fire from 'shared/images/Fire.svg';

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
          passThroughRef={topLeftQuadrantRef}
          area={topLeftArea}
          position={position}
          element="water"
          symbol={Water}
        />
        <Quadrant
          gridArea="top-right"
          passThroughRef={topRightQuadrantRef}
          area={topRightArea}
          position={position}
          element="earth"
          symbol={Earth}
        />
        <Quadrant
          gridArea="bottom-left"
          passThroughRef={bottomLeftQuadrantRef}
          area={bottomLeftArea}
          position={position}
          element="fire"
          symbol={Fire}
        />
        <Quadrant
          gridArea="bottom-right"
          passThroughRef={bottomRightQuadrantRef}
          area={bottomRightArea}
          position={position}
          element="air"
          symbol={Air}
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
