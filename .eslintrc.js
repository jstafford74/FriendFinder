module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
  },

  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'no-multiple-empty-lines': 'off',
    // 'require-jsdoc': 'off',
    // 'linebreak-style': 0,
    // 'global-require': 0,
    // 'eslint linebreak-style': [0, 'error', 'windows'],
  },
};
