const pluginTester = require('babel-plugin-tester').default;

const plugin = require('../src/index');

pluginTester({
  plugin,
  pluginName: 'animation',
  title: 'change animation prop to css styled prop',
  filename: __filename,
  tests: [
    {
      title: 'with a single variable',
      fixture: 'fixtures/singleVariable/code.js',
      outputFixture: 'fixtures/singleVariable/output.js',
    },
    {
      title: 'with an array with a single item',
      fixture: 'fixtures/arraySingle/code.js',
      outputFixture: 'fixtures/arraySingle/output.js',
    },
    {
      title: 'with an array with a multiple items',
      fixture: 'fixtures/arrayMultiple/code.js',
      outputFixture: 'fixtures/arrayMultiple/output.js',
    },
  ],
});
