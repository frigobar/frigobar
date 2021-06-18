module.exports = {
  env: {
    production: {
      ignore: ['./**/*.test.js', './**/*.test.jsx'],
      presets: [
        '@babel/preset-react',
        '@babel/preset-env',
        '@babel/preset-typescript',
      ],
      plugins: ['inline-react-svg'],
    },
    cjs: {
      ignore: ['./**/*.test.js', './**/*.test.jsx'],
      presets: [
        '@babel/preset-react',
        '@babel/preset-env',
        '@babel/preset-typescript',
      ],
      plugins: ['inline-react-svg'],
    },
    esm: {
      ignore: ['./**/*.test.js', './**/*.test.jsx'],
      presets: [
        '@babel/preset-react',
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
