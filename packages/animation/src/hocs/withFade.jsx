import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

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

/**
 * Returns a new Component with opacity keyframes to change from 0 to 1.
 * @param {ReactComponent} Component -  Add two new props to the returned
 * Component. fadeDuration: {Number} Animation duration. renderControl:
 * {Boolean} Starts the animation when true
 */
const withFade = Component => {
  const FadedComponent = forwardRef(
    (
      { fadeDuration, renderControl, fadeIn, fadeOut, onFadeEnd, ...props },
      ref,
    ) => {
      const [shouldRender, setShouldRender] = useState(renderControl);

      useEffect(() => {
        if (renderControl) setShouldRender(true);
        if (!fadeOut && !renderControl) setShouldRender(false);
      }, [renderControl]);

      const renderConditional = e => {
        if (!renderControl) {
          setShouldRender(false);
          onFadeEnd(e);
        }
      };

      const EffectComponent = styled(Component)(() => {
        if (fadeIn && fadeOut) {
          return css`
            animation: ${renderControl ? fadeInAnimation : fadeOutAnimation}
              ${fadeDuration}ms;
          `;
        }
        if (renderControl && fadeIn) {
          return css`
            animation: ${fadeInAnimation} ${fadeDuration}ms;
          `;
        }

        if (!renderControl && fadeOut) {
          return css`
            animation: ${fadeOutAnimation} ${fadeDuration}ms;
          `;
        }

        return null;
      });

      return shouldRender ? (
        <EffectComponent
          onAnimationEnd={renderConditional}
          ref={ref}
          {...props}
        />
      ) : null;
    },
  );

  FadedComponent.propTypes = {
    fadeDuration: PropTypes.number,
    renderControl: PropTypes.bool,
    fadeIn: PropTypes.bool,
    fadeOut: PropTypes.bool,
    onFadeEnd: PropTypes.func,
  };
  FadedComponent.defaultProps = {
    fadeDuration: 300,
    renderControl: true,
    fadeIn: false,
    fadeOut: false,
    onFadeEnd: () => {},
  };

  return FadedComponent;
};

export default withFade;
