import React, { useEffect, useRef } from 'react';
import shurikenImg from 'shared/images/Shuriken.svg';
import PropTypes from 'prop-types';
import {
  TweenLite, TimelineLite, Expo, Sine,
} from 'gsap';
import styled from 'styled-components';

const ShurikenBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${shurikenImg});
  background-size: cover;
  height: 200px;
  width: 200px;
`;

const Shuriken = ({ position }) => {
  let boxRef = useRef(null);

  // Run once
  useEffect(() => {
    TweenLite.set(boxRef, { xPercent: -50, yPercent: -50 });
  }, []);

  // Run whenever position changes
  useEffect(() => {
    // init the animation timeline.
    const timeline = new TimelineLite();

    timeline
      .fromTo(
        boxRef,
        1,
        { rotation: 0, transformOrigin: '50% 50%' },
        {
          rotation: 720,
          repeatDelay: 0,
          ease: Expo.easeOut,
        },
        0,
      )
      .to(
        boxRef,
        0.5,
        {
          x: position.x,
          y: position.y,
          ease: Sine.easeOut,
        },
        0,
      );
  }, [position]);

  return (
    <ShurikenBox
      ref={(element) => {
        boxRef = element;
      }}
    />
  );
};

Shuriken.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Shuriken;
