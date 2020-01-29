const getPaths = name => {
  const base = `${process.cwd()}/packages/core`;
  const paths = {
    story: `${base}/stories`,
    components: `${base}/src/components`,
  };

  return paths;
};

module.exports = getPaths;
