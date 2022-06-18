module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    camelcase: 'off',
    // "prettier/prettier": ["error", { singleQuote: true }],
  },
};
