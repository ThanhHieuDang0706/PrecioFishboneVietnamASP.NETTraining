module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript-prettier'],
  plugins: ['prettier'],
  globals: {
    $: true,
    document: true,
    window: true,
    fetch: true,
  },
  ignorePatterns: ['/dist/js/**.js', 'webpack.config.js', '/node_modules'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-empty': 'off',
    'no-useless-return': 'off',
  },
};
