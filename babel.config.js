module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  plugins: ['inline-react-svg'],
  env: {
    production: {
      ignore: ['./components/**/*.test.js', './components/**/*/__snapshots__'],
    },
    test: {
      presets: ['@babel/preset-react', ['@babel/preset-env']],
    },
  },
};
