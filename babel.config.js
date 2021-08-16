module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: ['inline-react-svg'],
  env: {
    production: {
      ignore: ['**/*.test.js', '**/*.test.tsx'],
      plugins: ['inline-react-svg'],
    },
    cjs: {
      ignore: ['**/*.test.js', '**/*.test.tsx'],
      plugins: ['inline-react-svg'],
    },
    esm: {
      ignore: ['**/*.test.js', '**/*.test.tsx'],
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['inline-react-svg'],
    },
    test: {
      plugins: [
        'babel-plugin-styled-components',
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    },
  },
};
