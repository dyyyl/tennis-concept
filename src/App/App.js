import React, { useEffect, useState } from 'react';

import Title from 'shared/components/Title';
import Shuriken from 'shared/components/Shuriken';
import Star from 'shared/components/Star';
import Layout from 'shared/components/Layout';

import moveShuriken from 'shared/helpers/moveShuriken';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 4,
  });

  useEffect(() => {
    document.addEventListener('click', event => moveShuriken(event, setPosition));
    return document.removeEventListener('click', moveShuriken);
  }, []);

  return (
    <>
      <Layout>
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
