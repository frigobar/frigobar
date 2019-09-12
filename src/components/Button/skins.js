const getButtonColors = (colors, skin) => ({
  bgColor: colors[skin][500],
  textColor: colors.neutral[50],
});

const skins = ({ colors }) => ({
  primary: getButtonColors(colors, 'primary'),
  info: getButtonColors(colors, 'info'),
  success: getButtonColors(colors, 'success'),
  warning: getButtonColors(colors, 'warning'),
  danger: getButtonColors(colors, 'danger'),
  neutral: getButtonColors(colors, 'neutral'),
});

export default skins;
