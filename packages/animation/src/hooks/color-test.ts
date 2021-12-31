import { useState, useCallback, useRef } from 'react';

const background = [{ backgroundColor: 'red' }, { backgroundColor: 'blue' }];

const useColorAnimation = ({
  duration = 300,
  startOnRender = true,
  onAnimationEnd,
} = {}) => {
  const animateRef = useRef(null);
  const [animationState, setAnimationState] = useState(Boolean(startOnRender));
  const [instantState, setInstantState] = useState(Boolean(startOnRender));

  const toggle = useCallback(state => {
    if (state) {
      setAnimationState(state);
      animateRef.current?.effect.updateTiming({ direction: 'normal' });
    } else {
      animateRef.current?.effect.updateTiming({ direction: 'reverse' });
      animateRef.current?.play();
    }
  }, []);

  return [
    useCallback(
      ref => {
        if (ref) {
          const animate = ref.animate(background, {
            duration,
            fill: 'forwards',
          });

          animateRef.current = animate;

          animateRef.current.onfinish = event => {
            if (animateRef.current.effect.getTiming().direction === 'reverse') {
              setAnimationState(false);
            }
            onAnimationEnd(event);
          };

          return ref;
        }
      },
      [animationState],
    ),
    animationState,
    instantState,
    toggle,
  ];
};

export default useColorAnimation;
