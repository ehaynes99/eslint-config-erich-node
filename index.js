module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/recommended',
    // prettier must come last to disable conflicts with its formatting
    'plugin:prettier/recommended',
  ],
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
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'no-multi-spaces': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', asyncArrow: 'always', named: 'never' },
    ],
    'no-unused-vars': [
      'error',
      { args: 'after-used', varsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
