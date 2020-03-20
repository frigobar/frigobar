import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

/**
 * Returns a new Component with opacity keyframes to change from 0 to 1.
 * @param {ReactComponent} Component -  Add two new props to the returned
 * Component. duration: {String} Animation duration. show: {Boolean} Init
 * visible or hidden.
 */
const withFade = Component => {
  const FadedComponent = forwardRef(({ duration, show, ...props }, ref) => {
    const [shouldRender, setShouldRender] = useState(show);

    useEffect(() => {
      if (show) setShouldRender(true);
    }, [show]);

    const onAnimationEnd = () => {
      if (!show) setShouldRender(false);
    };

    const EffectComponent = styled(Component)(
      ({ animationVisible, animationDuration }) => css`
        animation: ${animationVisible ? fadeIn : fadeOut} ${animationDuration}ms;
      `,
    );

    return shouldRender ? (
      <EffectComponent
        animationDuration={duration}
        animationVisible={show}
        onAnimationEnd={onAnimationEnd}
        ref={ref}
        {...props}
      />
    ) : null;
  });

  FadedComponent.propTypes = {
    duration: PropTypes.number,
    show: PropTypes.bool,
  };
  FadedComponent.defaultProps = {
    duration: 300,
    show: false,
  };

  return FadedComponent;
};

export default withFade;
