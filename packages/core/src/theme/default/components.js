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
  button: {
    backgroundColor: {
      primary: colors.primary[500],
      info: colors.info[500],
      success: colors.success[500],
      danger: colors.danger[500],
      warning: colors.warning[500],
      neutral: colors.neutral[500],
      disabled: colors.neutral[100],
    },
    textColor: {
      enabled: colors.neutral[50],
      disabled: colors.neutral[400],
    },
    sizes: {
      small: {
        font: 0.875,
        icon: 1,
        padding: {
          top: spacings.xxsmall,
          right: spacings.small,
          bottom: spacings.xxsmall,
          left: spacings.small,
        },
      },
      medium: {
        font: 1,
        icon: 1.275,
        padding: {
          top: spacings.xsmall,
          right: spacings.medium,
          bottom: spacings.xsmall,
          left: spacings.medium,
        },
      },
      large: {
        font: 1.275,
        icon: 1.5,
        padding: {
          top: spacings.small,
          right: spacings.large,
          bottom: spacings.small,
          left: spacings.large,
        },
      },
    },
  },
};

export default components;
