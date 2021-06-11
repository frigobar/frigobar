module.exports = {
  env: {
    production: {
      ignore: ['./components/**/*.test.js', './components/**/*/__snapshots__'],
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: [['inline-react-svg']],
    },
    cjs: {
      ignore: ['./components/**/*.test.js', './components/**/*/__snapshots__'],
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: [['inline-react-svg']],
    },
    esm: {
      ignore: ['./components/**/*.test.js', './components/**/*/__snapshots__'],
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [['inline-react-svg']],
    },
    test: {
      presets: ['@babel/preset-react', ['@babel/preset-env']],
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
