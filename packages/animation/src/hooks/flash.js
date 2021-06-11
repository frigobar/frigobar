import { useEffect, useState } from 'react';
import { keyframes, css } from 'styled-components';

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

function useFlash({ duration = 300, start = false, infinity, times = 2 }) {
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
            ${animation} ${duration}ms ${
            infinity ? 'infinite' : times * 2
          } alternate-reverse
    `,
          state: animationStart,
        },
        setAnimationStart,
      ]
    : [{ animation: '', state: animationStart }, setAnimationStart];
}

export default useFlash;
