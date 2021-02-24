module.exports = {
  extends: ['standard', 'prettier'],
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': ['warn', { allowPattern: '^([a-z]+(_[a-z]+)+|[A-Z].*)$' }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'quote-props': 'consistent',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'never'],
    'semi-style': ['error', 'first'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', asyncArrow: 'always', named: 'never' },
    ],
  },
}
