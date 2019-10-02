const getButtonColors = (colors, skin) => ({
  bgColor: colors[skin][500],
  textColor: colors.neutral[50],
});

const skins = ({ colors }) =>
  Object.keys(colors).reduce((acc, current) => {
    acc[current] = getButtonColors(colors, current);

    return acc;
  }, {});

export default skins;
