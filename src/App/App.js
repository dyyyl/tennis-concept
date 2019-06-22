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

  useEffect(() => {
    document.addEventListener('click', event => moveShuriken(event, setPosition));
    console.log(bottomLeftQuadrantRef.current.getBoundingClientRect());
    return document.removeEventListener('click', moveShuriken);
  }, []);

  return (
    <>
      <Layout>
        <Quadrant area="top-left" ref={topLeftQuadrantRef}>wun</Quadrant>
        <Quadrant area="top-right" ref={topRightQuadrantRef}>too</Quadrant>
        <Quadrant area="bottom-left" ref={bottomLeftQuadrantRef}>tree</Quadrant>
        <Quadrant area="bottom-right" ref={bottomRightQuadrantRef}>foah</Quadrant>
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
