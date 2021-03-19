/*
  https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/
*/
module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: 'module'
  },
  rules: {
    // Disable prop-types as we use TypeScript for type checking
    'prettier/prettier': 'error',
    // needed for NextJS's jsx without react import
    'react/react-in-jsx-scope': 'off'
  },
  globals: { React: 'writable' }
};
