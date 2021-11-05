import { useState, useCallback } from 'react';
import { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

interface IFade {
  fadeIn?: boolean;
  fadeOut?: boolean;
  duration?: number;
  startOnRender?: boolean;
}

type ReturnedAnimation = [
  {
    animation: FlattenSimpleInterpolation;
    state: boolean;
    instantState: boolean;
  },
  (state: any) => void,
];

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const generateAnimation = ({
  fadeIn,
  fadeOut,
  duration,
  start,
}: Omit<IFade, 'startOnRender'> & { start: boolean }) => {
  if (fadeIn && fadeOut) {
    return {
      animationName: start ? fadeInAnimation : fadeOutAnimation,
      animationDuration: duration,
    };
  }
  if (start && fadeIn) {
    return {
      animationName: fadeInAnimation,
      animationDuration: duration,
    };
  }

  if (!start && fadeOut) {
    return {
      animationName: fadeOutAnimation,
      animationDuration: duration,
    };
  }

  return null;
};

function useFade({
  fadeIn = true,
  fadeOut = true,
  duration = 300,
  startOnRender = true,
}: IFade & {} = {}): ReturnedAnimation {
  const [start, setStart] = useState(Boolean(startOnRender));
  const [animationState, setAnimationState] = useState(Boolean(startOnRender));

  const toggle = useCallback(
    state => {
      if (state) {
        setStart(true);
        setAnimationState(true);
      } else {
        setAnimationState(false);
        if (fadeOut) {
          setTimeout(() => {
            setStart(false);
          }, duration);
        } else {
          setStart(false);
        }
      }
    },
    [fadeOut, duration],
  );

  const animation = generateAnimation({
    fadeIn,
    fadeOut,
    duration,
    start: animationState,
  });

  if (!animation) {
    return [
      { animation: css`none`, state: start, instantState: animationState },
      toggle,
    ];
  }

  const { animationName, animationDuration } = animation;

  return [
    {
      animation: css`
        ${animationName} ${animationDuration}ms forwards
      `,
      state: start,
      instantState: animationState,
    },
    toggle,
  ];
}

export default useFade;
