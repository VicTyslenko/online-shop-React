module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard'
  ],
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.test.js',
        '**/*.test.jsx'
      ],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
