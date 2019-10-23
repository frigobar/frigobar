const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');

const copyFile = file => {
  const buildPath = path.resolve(__dirname, '../dist/esm/', path.basename(file));
  fs.copyFile(
    file,
    buildPath,
    () => console.log(`Copied ${file} to ${buildPath}`), // eslint-disable-line no-console
  );
};

const createPackageJson = () => {
  const {
    scripts,
    devDependencies,
    'lint-staged': lintStaged,
    jest,
    config,
    release,
    ...packageDataOther
  } = pkg;

  const newPackageData = {
    ...packageDataOther,
    main: './esm/components/index.js',
    module: './esm/components/index.js',
    private: false,
  };

  const buildPath = path.resolve(__dirname, '../dist/package.json');

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`); // eslint-disable-line no-console

  return newPackageData;
};

const run = () => {
  ['LICENSE', 'README.md'].map(copyFile);
  createPackageJson();
};

run();
