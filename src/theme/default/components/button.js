import colors from '../colors';

const getButtonColors = skin => ({
  bgColor: colors[skin][500],
  textColor: colors.neutral[50],
});

const button = {
  primary: getButtonColors('primary'),
  info: getButtonColors('info'),
  success: getButtonColors('success'),
  warning: getButtonColors('warning'),
  danger: getButtonColors('danger'),
  neutral: getButtonColors('neutral'),
};

export default button;
