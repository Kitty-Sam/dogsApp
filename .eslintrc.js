module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'no-var': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': 'error',
    'space-in-parens': 'error',
    'prettier/prettier': [2, { bracketSpacing: true }],
    'react/prop-types': 2,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': 'off',
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/export': 2,
    'react/display-name': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
