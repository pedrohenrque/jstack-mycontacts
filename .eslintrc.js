module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-confusing-arrow': 'off',
    camelcase: 'off',
    'implicit-arrow-linebreak': 'off',
    // "prettier/prettier": ["error", { singleQuote: true }],
  },
};
