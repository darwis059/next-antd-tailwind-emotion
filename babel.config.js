/**
 * Export babel configuration.
 */

module.exports = {
  presets: ['next/babel'],
  plugins: [
    // ['macros'],
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
