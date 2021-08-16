import { useEffect, useState } from 'react';
import { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

interface IFlash {
  duration?: number;
  start?: boolean;
  infinity?: boolean;
  times?: number;
}

type ReturnedAnimation = [
  {
    animation: FlattenSimpleInterpolation;
    state: boolean;
  },
  (state: any) => void,
];

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

function useFlash({
  duration = 300,
  start = false,
  infinity = false,
  times = 2,
}: IFlash = {}): ReturnedAnimation {
  const [animationStart, setAnimationStart] = useState(start);

  useEffect(() => {
    if (start) {
      setAnimationStart(true);
    } else {
      setAnimationStart(false);
    }
  }, [start]);

  return animationStart
    ? [
        {
          animation: css`
          ${animation} ${duration}ms
          ${infinity ? 'infinite' : times * 2} alternate-reverse
        `,
          state: animationStart,
        },
        setAnimationStart,
      ]
    : [{ animation: css`none`, state: animationStart }, setAnimationStart];
}

export default useFlash;
