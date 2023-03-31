module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2],
    'arrow-body-style': ['error', 'always'],
    quotes: ['error', 'single'],
    'jsx-a11y/no-static-element-interactions': ['always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['public', './public'],
          ['elements', './src/components/elements'],
          ['globalAssets', './src/globalAssets'],
          ['globalConfig', './src/globalConfig'],
          ['modules', './src/components/modules'],
          ['layouts', './src/components/layouts'],
          ['pages', './src/components/pages']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
}
