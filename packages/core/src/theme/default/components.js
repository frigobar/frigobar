import colors from './colors';
import spacings from './spacings';
import borders from './borders';

const components = {
  alert: {
    backgroundColor: {
      success: colors.success[50],
      info: colors.info[50],
      danger: colors.danger[50],
      warning: colors.warning[50],
      neutral: colors.neutral[50],
    },
    border: {
      width: borders.tiny,
      color: {
        success: colors.success[200],
        info: colors.info[200],
        danger: colors.danger[200],
        warning: colors.warning[200],
        neutral: colors.neutral[200],
      },
    },
    padding: {
      top: spacings.small,
      right: spacings.small,
      bottom: spacings.small,
      left: spacings.small,
    },
  },
};

export default components;
