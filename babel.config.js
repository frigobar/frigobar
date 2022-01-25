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
      plugins: [
        'inline-react-svg',
        '@frigobar/babel-plugin',
        'babel-plugin-styled-components',
      ],
    },
    cjs: {
      ignore: ['**/*.test.js', '**/*.test.tsx'],
      plugins: [
        'inline-react-svg',
        '@frigobar/babel-plugin',
        'babel-plugin-styled-components',
      ],
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
      plugins: [
        'inline-react-svg',
        '@frigobar/babel-plugin',
        'babel-plugin-styled-components',
      ],
    },
    test: {
      plugins: [
        '@frigobar/babel-plugin',
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
