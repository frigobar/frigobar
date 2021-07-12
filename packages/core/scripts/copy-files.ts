/* eslint-disable @typescript-eslint/no-unused-vars */
import path from 'path';
import fs from 'fs';
import pkg from '../package.json';

const copyFile = (file: string, destinationPath?: string) => {
  const buildPath = path.resolve(
    __dirname,
    `../dist/${destinationPath}`,
    path.basename(file),
  );
  fs.copyFile(
    file,
    buildPath,
    () => console.log(`Copied ${file} to ${buildPath}`), // eslint-disable-line no-console
  );
};

const createPackageJson = () => {
  const { scripts, devDependencies, ...packageDataOther } = pkg;

  const newPackageData = {
    ...packageDataOther,
    main: './cjs/index.js',
    module: './esm/index.js',
    private: false,
    types: './@types/index.d.ts',
  };

  const buildPath = path.resolve(__dirname, '../dist/package.json');

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`); // eslint-disable-line no-console

  return newPackageData;
};

const run = () => {
  ['LICENSE', 'README.md'].map(file => copyFile(file));
  createPackageJson();
};

run();
