import { TweenMax, Linear } from 'gsap';
import React, { useEffect, useRef } from 'react';

import Shuriken from 'shared/components/Shuriken';
import Box from 'shared/components/Box';
import Layout from 'shared/components/Layout';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  let boxRef = useRef(null);

  useEffect(() => {
    TweenMax.set(boxRef, { xPercent: -50, yPercent: -50 });

    // Start default spinning animation for the box.
    TweenMax.fromTo(
      boxRef,
      2,
      { rotation: 0 },
      {
        rotation: 360,
        repeat: -1,
        repeatDelay: 0,
        ease: Linear.easeNone,
      },
    );

    document.addEventListener('click', (event) => {
      const { clientX, clientY } = event;
      TweenMax.to(boxRef, 1, { x: clientX, y: clientY });
    });
  }, []);

  return (
    <>
      <Layout>
        <Shuriken
          ref={(element) => {
            boxRef = element;
          }}
        />
      </Layout>
      <GlobalStyle />
    </>
  );
};

export default App;
