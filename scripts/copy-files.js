const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');

const copyFile = file => {
  const buildPath = path.resolve(
    __dirname,
    '../build/esm/',
    path.basename(file),
  );
  fs.copyFile(file, buildPath, () =>
    console.log(`Copied ${file} to ${buildPath}`),
  );
};

const createPackageJson = () => {
  const {
    scripts,
    devDependencies,
    'lint-staged': lintStaged,
    jest,
    config,
    publishConfig,
    release,
    ...packageDataOther
  } = pkg;

  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
    module: './index.js',
    private: false,
  };

  const buildPath = path.resolve(__dirname, '../build/esm/package.json');

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
};

const run = () => {
  ['LICENSE', 'README.md'].map(copyFile);
  createPackageJson();
};

run();
