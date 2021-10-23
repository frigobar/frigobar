import colors from './colors';
import spacings from './spacings';
import borders from './borders';
import radius from './radius';
import baseFontSize from './fontSize';

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
  input: {
    backgroundColor: {
      primary: colors.white,
      danger: colors.danger[800],
    },
    textColor: {
      enabled: colors.black,
      // disabled: colors.neutral[400],
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
  badge: {
    border: {
      radius: radius[1],
    },
    padding: {
      right: spacings.xxsmall,
      left: spacings.xxsmall,
    },
    font: {
      size: baseFontSize * 0.75,
    },
  },
  card: {
    border: {
      radius: radius[1],
    },
    header: {
      padding: {
        top: spacings.medium,
        right: spacings.medium,
        bottom: spacings.xsmall,
        left: spacings.medium,
      },
    },
    title: {
      font: {
        size: 1.5,
      },
    },
    subtitle: {
      font: {
        size: 1,
      },
    },
    avatar: {
      radius: radius[1],
      size: 72,
    },
    media: {
      margin: {
        top: spacings.xsmall,
        bottom: spacings.xsmall,
      },
    },
    content: {
      padding: {
        top: spacings.xsmall,
        right: spacings.medium,
        bottom: spacings.xsmall,
        left: spacings.medium,
      },
    },
    footer: {
      padding: {
        top: spacings.xsmall,
        right: spacings.medium,
        bottom: spacings.medium,
        left: spacings.medium,
      },
    },
  },
  menu: {
    backgroundColor: colors.white,
    radius: radius[1],
    item: {
      padding: {
        top: spacings.xsmall,
        right: spacings.xsmall,
        bottom: spacings.xsmall,
        left: spacings.xsmall,
      },
      hoverColor: colors.primary[200],
    },
  },
};

export default components;
