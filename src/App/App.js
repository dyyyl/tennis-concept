import { TweenMax } from 'gsap';
import React, { useEffect, useRef } from 'react';

import Box from 'shared/components/Box';
import Layout from 'shared/components/Layout';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  let boxRef = useRef(null);

  useEffect(() => {
    TweenMax.set(boxRef, { xPercent: -50, yPercent: -50 });

    document.addEventListener('click', (event) => {
      const { clientX, clientY } = event;
      TweenMax.to(boxRef, 1, { x: clientX, y: clientY });
    });
  }, []);

  return (
    <>
      <Layout>
        <Box
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
