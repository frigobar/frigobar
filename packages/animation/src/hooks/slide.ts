import { useState, useCallback } from 'react';
import { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

interface IAxis {
  x: number | string;
  y: number | string;
}

interface ISlide {
  slideIn?: boolean;
  slideOut?: boolean;
  duration?: number;
  from: IAxis;
  to: IAxis;
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

const slideInAnimation = (
  { x: fromX = 0, y: fromY = 0 }: IAxis,
  { x: toX = 0, y: toY = 0 }: IAxis,
) => keyframes`
  0% {
    transform: translate(${fromX}, ${fromY});
  }
  100% {
    transform: translate(${toX}, ${toY});
  }
`;

const slideOutAnimation = (
  { x: fromX = 0, y: fromY = 0 }: IAxis,
  { x: toX = 0, y: toY = 0 }: IAxis,
) => keyframes`
  0% {
    transform: translate(${toX}, ${toY});
  }
  100% {
    transform: translate(${fromX}, ${fromY});
  }
`;

const generateAnimation = ({
  from,
  to,
  slideIn,
  slideOut,
  duration,
  start,
}: Omit<ISlide, 'startOnRender'> & { start: boolean }) => {
  if (slideIn && slideOut) {
    return {
      animationName: start
        ? slideInAnimation(from, to)
        : slideOutAnimation(from, to),
      animationDuration: duration,
    };
  }
  if (start && slideIn) {
    return {
      animationName: slideInAnimation(from, to),
      animationDuration: duration,
    };
  }

  if (!start && slideOut) {
    return {
      animationName: slideOutAnimation(from, to),
      animationDuration: duration,
    };
  }

  return null;
};

function useSlide({
  slideIn = true,
  slideOut = true,
  from = {
    x: 0,
    y: 0,
  },
  to = {
    x: 0,
    y: 0,
  },
  duration = 300,
  startOnRender = true,
}: ISlide): ReturnedAnimation {
  const [start, setStart] = useState(Boolean(startOnRender));
  const [animationState, setAnimationState] = useState(Boolean(startOnRender));

  const toggle = useCallback(
    state => {
      if (state) {
        setStart(true);
        setAnimationState(true);
      } else {
        setAnimationState(false);
        if (slideOut) {
          setTimeout(() => {
            setStart(false);
          }, duration);
        } else {
          setStart(false);
        }
      }
    },
    [slideOut, duration],
  );

  const animation = generateAnimation({
    slideIn,
    slideOut,
    from,
    to,
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

export default useSlide;
