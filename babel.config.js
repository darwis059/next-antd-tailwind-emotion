/**
 * Export babel configuration.
 */

module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@emotion/babel-plugin',
    'macros',
    [
      'import',
      {
        libraryName: 'antd',
        // libraryDirectory: 'es',
        style: true//"index.less"
      }
    ]
  ]
};
