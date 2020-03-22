import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

/**
 * Returns a new Component with opacity keyframes to change from 0 to 1.
 * @param {ReactComponent} Component -  Add two new props to the returned
 * Component. flashDuration: {String} Animation duration. flashStart: {Boolean}
 * Init visible or hidden.
 */
const withFlash = Component => {
  const FadedComponent = forwardRef(
    (
      {
        flashDuration,
        flashStart,
        flashInfinity,
        flashTimes,
        onFlashEnd,
        ...props
      },
      ref,
    ) => {
      const EffectComponent = styled(Component)(
        () => css`
          ${flashStart
            ? css`
                animation-name: ${animation};
                animation-duration: ${flashDuration / 2}ms;
                animation-direction: alternate-reverse;
                ${flashTimes
                  ? `animation-iteration-count: ${flashTimes * 2};`
                  : null}
                ${flashInfinity ? `animation-iteration-count: infinite;` : null}
              `
            : null}
        `,
      );

      return (
        <EffectComponent onAnimationEnd={onFlashEnd} ref={ref} {...props} />
      );
    },
  );

  FadedComponent.propTypes = {
    flashDuration: PropTypes.number,
    flashStart: PropTypes.bool,
    flashInfinity: PropTypes.bool,
    flashTimes: PropTypes.number,
    onFlashEnd: PropTypes.func,
  };
  FadedComponent.defaultProps = {
    flashDuration: 300,
    flashStart: true,
    flashInfinity: false,
    flashTimes: 2,
    onFlashEnd: () => {},
  };

  return FadedComponent;
};

export default withFlash;
